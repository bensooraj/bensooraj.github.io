---
title: "Struct aggregation and embedding in golang"
date: 2020-08-03T02:04:32+05:30
# draft: true
---

A **struct**,
- is a collection of fields of various types, incuding other structs!
- can be used to create user-defined data types
- can have methods defined on them
- its fields and methods are accessed using the **dot** notation

For example, `Point` is a struct which has,

- two fields `X` and `Y` of type `float64`
- has two methods `String` and `MakesNoSense`

```golang
// structs.go
// Struct definition
type Point struct {
	X, Y float64
}

// String overrides how an entity of type `Point` 
// is printed (for example, to `stdout`)
func (p Point) String() string {
	return fmt.Sprintf("Point {%f, %f}", p.X, p.Y)
}

// MakesNoSense is just a dummy method
func (p Point) MakesNoSense() {
	fmt.Printf("Point {%f, %f} is just a point!\n", p.X, p.Y)
	return
}

func main() {
	var pt Point
	pt.X = 1.123 // 
	pt.Y = 2.123 // 

    fmt.Println(pt)
    pt.MakesNoSense()
}
```

results in,
```sh
$ go run structs.go
Point {1.123000, 2.123000}
Point {1.123000, 2.123000} is just a point!
```

## Nested Structs

Yes, you can define one struct inside another. There are two ways to go about it: **struct aggregation** and **struct embedding**.

### Struct Aggregation

This approach implies a `has-a` relationship. For example, a line has two points (start and end) and can be declared as follows:

```golang
// Line struct has two fields of type Point
type Line struct {
	Start, End Point
}

// Distance methods calculates the euclidean distance 
// between the two Points
func (l Line) Distance() float64 {
	xDiff := math.Abs(l.Start.X - l.End.X)
	yDiff := math.Abs(l.Start.Y - l.End.Y)

	return math.Sqrt(math.Pow(xDiff, 2) + math.Pow(yDiff, 2))
}

// Usage
func main() {
	l := Line{
		Start: Point{
			X: 2.304,
			Y: 4.504,
		},
		End: Point{
			X: 30.607,
			Y: 44.104,
		},
	}
	fmt.Printf("Distance from %v to %v is %f units\n", l.Start, l.End, l.Distance())
}
// Distance from Point {2.304000, 4.504000} to Point {30.607000, 44.104000} is 48.674632 units
```

Let's redefine `Line` struct slightly differently using inline structs,
```golang
type Line struct {
	Start, End struct {
		X float64
		Y float64
	}
}

// Usage
func main() {
	l := Line{
		Start: struct {
			X float64
			Y float64
		}{
			X: 3.123,
			Y: 8.123,
		},
		End: struct {
			X float64
			Y float64
		}{
			X: 4.123,
			Y: 7.123,
		},
	}
}
```
This approach requires you to rely on `anonymous structs` during initialization.

### Struct Embedding

This approach implies an `is-a` relationship. For example, a rectangle is a polygon and can be decalred as shown below:
```golang
// embed.go
// Polygon has just two fields for the sake of simplicity
type Polygon struct {
	Width, Height int
}

// Set width and height of the polygon
func (p *Polygon) Set(w, h int) {
	p.Width = w
	p.Height = h
}

// Rectangle is a polygon, with one extra field 'color'
type Rectangle struct {
	color string
	Polygon // Notice the embedding?
}

// Area method can access the fields Width and Height even though
// they are not directly defined within the Rectangle struct
func (r *Rectangle) Area() float64 {
	return float64(r.Width * r.Height)
}

func main() {
	var rect Rectangle
	rect.Set(10, 20) // direct
	rect.color = "Blue"
	fmt.Printf("Rectangle: %+v\n", rect)
	fmt.Printf("Rectangle Width: %+v\n", rect.Width) // direct
	fmt.Printf("Rectangle Height: %+v\n", rect.Height) // direct
	fmt.Printf("Area of the rectangle is: %+v\n", rect.Area())

	rect.Polygon.Set(100, 200) // indirect
	fmt.Printf("Rectangle: %+v\n", rect)
}
``` 
results in,
```sh
$ go run embed.go
Rectangle: {color:Blue Polygon:{Width:10 Height:20}}
Rectangle Width: 10
Rectangle Height: 20
Area of the rectangle is: 200
Rectangle: {color:Blue Polygon:{Width:100 Height:200}}
```

You can see that `rect` can access:
1. `Rectangle` struct's fields and methods
2. `Polygon` struct's fields and methods - both directly and indirectly

I am not sure if that's the correct way to put it, but these are my observations.

---

Note: _This article is not an in-depth tutorial or treatment of Golang's syntax, semantics, design or implementation, but a journal of my learnings._