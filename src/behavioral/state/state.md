# State

## Intent

Cho phép object thay đổi hành vi khi trạng thái nội bộ thay đổi. Nhìn từ ngoài, object như thể thay đổi class của nó.

## Motivation

Ví dụ máy trạng thái (state machine): `Context` có thể ở `StateA` hoặc `StateB`. Khi `request`, behavior phụ thuộc vào state hiện tại và có thể chuyển sang state khác.

## Structure

- **State**: Interface khai báo hành vi theo state.
- **ConcreteState**: Triển khai behavior cho từng state.
- **Context**: Giữ tham chiếu đến State hiện tại, ủy thác behavior cho state.

## Participants

- `State` (interface)
- `ConcreteStateA`, `ConcreteStateB`
- `Context`
- `Client`

## Applicability

- Khi hành vi object thay đổi tùy theo state.
- Khi cần giảm các câu lệnh điều kiện phức tạp.
- Khi muốn tách logic state ra khỏi context.

## Consequences

✅ Ưu điểm:

- Giảm câu lệnh điều kiện if/else phức tạp.
- Dễ thêm state mới.
- Behavior tách biệt, dễ bảo trì.

⚠️ Nhược điểm:

- Tăng số lượng class.
- Context phải biết các state để khởi tạo.

## Sample Code

Xem file [`example.ts`](./example.ts)

## Related Patterns

- **Strategy**: Cả hai đều đóng gói behavior, nhưng State tự thay đổi nội tại, còn Strategy do client chọn.
- **Flyweight**: Có thể chia sẻ state object nếu chúng không giữ dữ liệu riêng.

## Diagram

```java
public interface OrderState {
    void next(OrderContext ctx);
    void cancel(OrderContext ctx);
    String getStatus();
}

// Trạng thái Đã Thanh Toán
class PaidState implements OrderState {
    @Override
    public void next(OrderContext ctx) {
        ctx.setState(new ShippedState());
        System.out.println("Đơn hàng đã được bàn giao cho đơn vị vận chuyển.");
    }

    @Override
    public void cancel(OrderContext ctx) {
        System.out.println("Đang hoàn tiền... Đơn hàng đã được hủy.");
        ctx.setState(new CancelledState());
    }

    @Override
    public String getStatus() { return "PAID"; }
}

// Trạng thái Đang Giao Hàng
class ShippedState implements OrderState {
    @Override
    public void next(OrderContext ctx) {
        ctx.setState(new DeliveredState());
    }

    @Override
    public void cancel(OrderContext ctx) {
        System.out.println("Lỗi: Không thể hủy đơn hàng khi đang trên đường giao!");
    }

    @Override
    public String getStatus() { return "SHIPPED"; }
}

public class OrderContext {
    private OrderState state = new NewOrderState(); // Mặc định là mới

    public void setState(OrderState state) { this.state = state; }

    public void nextStep() { state.next(this); }
    public void cancelOrder() { state.cancel(this); }
    
    public void showStatus() {
        System.out.println("Trạng thái đơn hàng: " + state.getStatus());
    }
}
```

```mermaid
classDiagram
    direction LR

    class State {
        <<interface>>
        +handle(context: Context)
    }

    class ConcreteStateA {
        +handle(context: Context)
    }

    class ConcreteStateB {
        +handle(context: Context)
    }

    class Context {
        -state: State
        +setState(state: State)
        +request()
    }

    State <|.. ConcreteStateA
    State <|.. ConcreteStateB
    Context --> State
```
