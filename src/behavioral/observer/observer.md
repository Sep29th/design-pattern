# Observer

## Intent

Xác định quan hệ **một-nhiều** giữa các object: khi một object thay đổi trạng thái, tất cả các object phụ thuộc sẽ được thông báo và cập nhật tự động.

## Motivation

Ví dụ `ConcreteSubject` có nhiều `Observer`. Khi subject thay đổi trạng thái, nó tự động gọi `update` cho các observer.

## Structure

- **Subject**: Giữ danh sách observer, có method attach/detach/notify.
- **Observer**: Interface nhận thông báo.
- **ConcreteSubject**: Triển khai Subject, giữ trạng thái.
- **ConcreteObserver**: Triển khai Observer, cập nhật khi notify.
- **Client**: Gắn observer với subject.

## Participants

- `Subject`
- `Observer`
- `ConcreteSubject`
- `ConcreteObserver`
- `Client`

## Applicability

- Khi một object thay đổi thì nhiều object khác cần cập nhật.
- Khi cần tách biệt subject và observer để dễ mở rộng.
- Khi muốn thực hiện event-driven.

## Consequences

✅ Ưu điểm:

- Giảm coupling giữa subject và observer.
- Dễ thêm observer mới mà không cần sửa subject.
- Hỗ trợ broadcast tự nhiên.

⚠️ Nhược điểm:

- Có thể gây update dây chuyền ngoài ý muốn.
- Observer có thể bị gọi nhiều lần không cần thiết.

## Sample Code

Xem file [`example.ts`](./example.ts)

## Related Patterns

- **Mediator**: Điều phối nhiều object, nhưng tập trung vào điều khiển hơn là publish-subscribe.
- **Event Bus**: Là biến thể mở rộng của Observer trong hệ thống lớn.

## Diagram

```java
public interface StockObserver {
    void update(String stockSymbol, double price);
}

import java.util.ArrayList;
import java.util.List;

public class StockTicker {
    private List<StockObserver> observers = new ArrayList<>();
    private String symbol;
    private double price;

    public StockTicker(String symbol) { this.symbol = symbol; }

    public void subscribe(StockObserver observer) {
        observers.add(observer);
    }

    public void unsubscribe(StockObserver observer) {
        observers.remove(observer);
    }

    public void setPrice(double newPrice) {
        this.price = newPrice;
        notifyObservers();
    }

    private void notifyObservers() {
        for (StockObserver observer : observers) {
            observer.update(symbol, price);
        }
    }
}

class MobileAppDisplay implements StockObserver {
    @Override
    public void update(String symbol, double price) {
        System.out.println("Mobile App: Giá mã " + symbol + " vừa cập nhật thành: " + price);
    }
}

class AutoTradingBot implements StockObserver {
    @Override
    public void update(String symbol, double price) {
        if (price < 100.0) {
            System.out.println("Bot: Giá thấp! Đang tự động đặt lệnh mua " + symbol);
        }
    }
}
```

```mermaid
classDiagram
    direction LR

    class Subject {
        <<interface>>
        +attach(observer)
        +detach(observer)
        +notify()
    }

    class Observer {
        <<interface>>
        +update(state)
    }

    class ConcreteSubject {
        -state: string
        -observers: Observer[]
        +setState(state)
        +attach(observer)
        +detach(observer)
        +notify()
    }

    class ConcreteObserver {
        -name: string
        +update(state)
    }

    Subject <|.. ConcreteSubject
    Observer <|.. ConcreteObserver
    ConcreteSubject --> Observer
```
