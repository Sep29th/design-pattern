# Visitor

## Intent

Định nghĩa một operation mới trên cấu trúc object mà **không thay đổi class** của các element trong cấu trúc đó.

## Motivation

Ví dụ có `Circle`, `Square`. Nếu muốn thêm behavior (tính diện tích, vẽ), thay vì chỉnh sửa class element, ta dùng `Visitor` để tách riêng behavior.

## Structure

- **Visitor**: Định nghĩa operation cho từng loại Element.
- **ConcreteVisitor**: Cài đặt operation cụ thể.
- **Element**: Interface có method `accept`.
- **ConcreteElement**: Triển khai `accept`, gọi lại Visitor.
- **Client**: Duyệt element và gọi visitor.

## Participants

- `Visitor`
- `AreaCalculator`, `DrawingVisitor` (ConcreteVisitor)
- `Shape` (Element)
- `Circle`, `Square` (ConcreteElement)
- `Client`

## Applicability

- Khi cần thêm operation mới cho cấu trúc object ổn định.
- Khi muốn gom logic liên quan thành class Visitor.
- Khi class element ít thay đổi, nhưng operation thường xuyên thay đổi.

## Consequences

✅ Ưu điểm:

- Dễ thêm operation mới.
- Gom logic chung vào Visitor.
- Tuân thủ Open/Closed.

⚠️ Nhược điểm:

- Khó thêm loại Element mới (phải sửa tất cả Visitor).
- Có thể vi phạm encapsulation nếu Visitor cần truy cập nội bộ Element.

## Sample Code

Xem file [`example.ts`](./example.ts)

## Related Patterns

- **Composite**: Visitor thường dùng để duyệt cây Composite.
- **Interpreter**: Visitor có thể dùng để đánh giá cấu trúc ngữ pháp.

## Diagram

```java
public interface Product {
    void accept(Visitor visitor);
}

class Electronics implements Product {
    private double price;
    public Electronics(double price) { this.price = price; }
    public double getPrice() { return price; }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this); // Gửi chính nó cho khách xử lý
    }
}

class Food implements Product {
    private double weight;
    private double pricePerKg;
    public Food(double weight, double pricePerKg) { this.weight = weight; this.pricePerKg = pricePerKg; }
    public double getPrice() { return weight * pricePerKg; }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

public interface Visitor {
    void visit(Electronics electronics);
    void visit(Food food);
}

// Thuật toán tính thuế
class TaxVisitor implements Visitor {
    @Override
    public void visit(Electronics e) {
        System.out.println("Thuế điện tử (10%): " + (e.getPrice() * 0.1));
    }

    @Override
    public void visit(Food f) {
        System.out.println("Thuế thực phẩm (5%): " + (f.getPrice() * 0.05));
    }
}

// Thuật toán tính điểm thưởng
class RewardPointsVisitor implements Visitor {
    @Override
    public void visit(Electronics e) {
        System.out.println("Điểm thưởng điện tử: " + (int)(e.getPrice() * 0.01));
    }

    @Override
    public void visit(Food f) {
        System.out.println("Điểm thưởng thực phẩm: " + (int)(f.getPrice() * 0.02));
    }
}
```

```mermaid
classDiagram
    direction LR

    class Visitor {
        <<interface>>
        +visitCircle(circle)
        +visitSquare(square)
    }

    class AreaCalculator {
        +visitCircle(circle)
        +visitSquare(square)
    }

    class DrawingVisitor {
        +visitCircle(circle)
        +visitSquare(square)
    }

    class Shape {
        <<interface>>
        +accept(visitor: Visitor)
    }

    class Circle {
        +accept(visitor: Visitor)
    }

    class Square {
        +accept(visitor: Visitor)
    }

    Visitor <|.. AreaCalculator
    Visitor <|.. DrawingVisitor

    Shape <|.. Circle
    Shape <|.. Square

    Circle --> Visitor
    Square --> Visitor
```
