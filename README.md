
# Workshop Documentation

## Deployed Application  
**URL:** [https://shopping-cart-app-96.netlify.app/](https://shopping-cart-app-96.netlify.app/)

## Available Pages

- **Home Page** (`/`)  
  Displays a welcoming hero section with a call-to-action.

- **Products Cards Page** (`/products`)  
  Shows all products, including rating, price, review and image.

- **Product Detail Page** (`/products/:id`)  
  Shows details of a single product, including description, price, and image.

- **Cart Page** (`/cart`)  
  View selected products, update quantities, remove items, and see the total.

### Screen 1: Product Listing
- Display a welcoming hero section 
- Display call-to-action button


### Screen 2: Product Listing
- Displays 10,000+ products(Using js function).
- Products shown in a list view (Cards).
- Pagination implemented for performance.
- Clicking a product navigates to the Product Details screen.

### Screen 3: Product Details
- Shows detailed product information: name, description, price, image, rating, review, category sku and brand.
- Button to add the product to the shopping cart.

### Screen 4: Shopping Cart
- Lists products added to the cart.
- Ability to remove products from the cart.
- Displays price per product (Quantity × Price).
- Order Summary


-------------------------------------------------------------------------------------------------------------------------

# R & D Task

## 1- jsxGraph is graphing tool used for drawing, please mention the pros & cons and technical issues.

### Pros

- **Highly Interactive**: Objects can be moved and manipulated interactively, making it ideal for educational tools and math demos.
- **Rich API**: Provides extensive functions to create geometrical figures, functions, sliders, animations, etc.
- **Math-Focused**: Built with math and geometry in mind; supports algebraic expressions, function graphs, and differential equations.
- **Cross-Browser Support**: Works reliably across most modern browsers.
- **No External Dependencies**: Runs standalone, doesn't require large frameworks or third-party libraries.
- **Good Documentation**: Comes with API references, tutorials, and examples.

### Cons

- **Steep Learning Curve**: The API can be complex for beginners unfamiliar with event-driven or mathematical programming.
- **Limited Community Support**: Fewer online resources, StackOverflow posts, or GitHub issues compared to more mainstream graphing libraries.
- **Not Suitable for Large-Scale Charting**: Better suited for educational or niche interactive applications than for large datasets or dashboards.
- **Low-Level Abstractions**: Requires a lot of manual configuration compared to higher-level libraries like D3.js or Chart.js.

### Technical Issues

- **Performance Bottlenecks**: Rendering complex or large numbers of objects can lead to slow performance, especially on mobile devices.
- **Canvas vs. SVG Limitations**: Some rendering features behave differently across SVG and Canvas modes, leading to inconsistencies.
- **Event Handling Quirks**: Touch and mouse events may not always be consistent, particularly on hybrid devices.
- **No Built-In Accessibility Support**: Limited support for screen readers and keyboard navigation.
- **Integration Overhead**: Requires extra setup to integrate with modern front-end frameworks like React, Vue, or Angular.


## 2- is there any other free graphing tools equivalating jsxGraph.

Free Graphing Tools Equivalent to JSXGraph:

| Tool         | Interactive Geometry  | Function Plotting  | 3D Support  | Open Source   | Best Use Case               |
|--------------|-----------------------|--------------------|-------------|---------------|-----------------------------|
| JSXGraph     | ✅                   | ✅                 | ⚠️ Limited  | ✅ (MIT)     | Math education, geometry    |
| GeoGebra     | ✅                   | ✅                 | ✅          | ⚠️ Partially | Teaching, algebra/geometry  |
| Desmos API   | ⚠️ Limited           | ✅                 | ❌          | ❌           | Student/classroom use       |
| Function Plot| ❌                   | ✅                 | ❌          | ✅           | Quick math plots            |
| D3.js        | ⚠️ Custom only       | ✅                 | ✅          | ✅           | Custom visualizations       |
| Plotly.js    | ❌                   | ✅                 | ✅          | ✅           | Data dashboards             |
| Two.js       | ⚠️ Manual only       | ❌                 | ❌          | ✅           | Creative/animated drawings  |




## 3- If there is an performance issue in the jsxGraph tool, how we can optimize it.


### Common Performance Bottlenecks

JSXGraph is efficient, but performance issues can arise in the following cases:

- Rendering **too many graphical elements**
- Overuse of **dynamic dependencies** and `board.update()`
- Frequent use of **animations or recalculations**
- Complex expressions or geometry structures
- Excessive **DOM reflows** or redraws

### Optimization Techniques

- Avoid creating unnecessary points, lines, or curves.
- Use grouped data structures like `curve` instead of many individual lines.
- Prevents multiple intermediate updates when making many changes.
- Avoid calling `board.update()` inside tight loops or fast setInterval timers.
- Limit how often events like on('move') trigger logic or updates.
- Turn off grid, zoom, pan, or navigation bar if not needed.
- Hide elements that don’t need to be drawn.
- Cache heavy calculations (e.g., numerical integration or custom functions). 
- Try using Canvas instead of SVG for complex or animated scenes.


