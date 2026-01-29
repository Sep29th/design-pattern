# Iterator

## Intent

Cung cấp cách truy cập tuần tự các phần tử của một collection **mà không để lộ cấu trúc bên trong**.

## Motivation

Ví dụ `NameCollection` chứa danh sách tên. Client có thể dùng `Iterator` để duyệt qua mà không cần biết cách collection được cài đặt.

## Structure

- **Iterator**: Interface duyệt phần tử.
- **ConcreteIterator**: Triển khai Iterator.
- **Aggregate (Collection)**: Interface tạo Iterator.
- **ConcreteAggregate**: Triển khai collection.
- **Client**: Sử dụng Iterator để duyệt.

## Participants

- `Iterator<T>`
- `NameIterator` (Concrete Iterator)
- `IterableCollection<T>`
- `NameCollection` (Concrete Aggregate)
- `Client`

## Applicability

- Khi cần duyệt qua collection mà không lộ cấu trúc.
- Khi muốn cung cấp nhiều cách duyệt (forward, backward).
- Khi cần tách logic duyệt ra khỏi collection.

## Consequences

✅ Ưu điểm:

- Duyệt collection đồng nhất.
- Dễ mở rộng kiểu duyệt khác nhau.
- Tách biệt collection và duyệt.

⚠️ Nhược điểm:

- Tăng số lượng class (nếu nhiều kiểu Iterator).
- Có thể gây overhead nhỏ khi đơn giản chỉ cần for loop.

## Sample Code

Xem file [`example.ts`](./example.ts)

## Related Patterns

- **Composite**: Iterator thường dùng để duyệt cây.
- **Factory Method**: Có thể dùng để tạo Iterator.

## Diagram

```java
public interface ProfileIterator {
    boolean hasNext();
    Profile getNext();
    void reset();
}

public class FacebookBFSIterator implements ProfileIterator {
    private Facebook network;
    private String profileId;
    private List<Profile> cache = new ArrayList<>();
    private int currentPosition = 0;

    public FacebookBFSIterator(Facebook network, String profileId) {
        this.network = network;
        this.profileId = profileId;
    }

    private void lazyInit() {
        if (cache.isEmpty()) {
            // Thực hiện thuật toán BFS phức tạp ở đây để lấy danh sách bạn bè
            // và lưu vào cache
            cache = network.remoteRequestProfiles(profileId, "BFS");
        }
    }

    @Override
    public boolean hasNext() {
        lazyInit();
        return currentPosition < cache.size();
    }

    @Override
    public Profile getNext() {
        if (!hasNext()) return null;
        return cache.get(currentPosition++);
    }

    @Override
    public void reset() { currentPosition = 0; }
}

interface SocialNetwork {
    ProfileIterator createFriendsIterator(String profileId);
    ProfileIterator createCoworkersIterator(String profileId);
}

class Facebook implements SocialNetwork {
    public ProfileIterator createFriendsIterator(String profileId) {
        return new FacebookBFSIterator(this, profileId);
    }
    // ...
}
```

```mermaid
classDiagram
    direction LR

    class Iterator~T~ {
        <<interface>>
        +hasNext(): boolean
        +next(): T
    }

    class IterableCollection~T~ {
        <<interface>>
        +createIterator(): Iterator~T~
    }

    class NameCollection {
        -names: string[]
        +createIterator(): Iterator~string~
    }

    class NameIterator {
        -index: number
        -names: string[]
        +hasNext(): boolean
        +next(): string
    }

    Iterator <|.. NameIterator
    IterableCollection <|.. NameCollection

    NameCollection --> NameIterator
```
