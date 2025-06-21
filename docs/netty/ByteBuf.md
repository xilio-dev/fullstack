
## 问题

### 读取ByteBuf数据的时候需要进行顺序读取，否则会读取到错误的数据

下面是一个简单的读写案例，用于演示顺序读取的问题：
```java
ByteBuf buffer = Unpooled.buffer(256);
buffer.writeInt(42);  // 写入整数
buffer.writeFloat(3.14f);  // 写入浮点数
buffer.writeDouble(32.6D);  // 写入字节数组

int readInt = buffer.readInt();
double readDouble = buffer.readDouble();
System.out.println(readInt);//输出42
System.out.println(readDouble); //输出结果应该是32.6，但是却不是,需要在之前调用readFloat移动读索引
```
上面代码表明读取数据需要和写数据的顺序一样，也就是必须按照 Int-Float-Double的方式调用，不能漏掉，因为每次调用读取都会移动指定字节的读索引指针，源码如下：
```java
@Override
public int readInt() {
    int v = _getInt(readerIndex); 
    readerIndex += 4; //读取数据后移动读索引，Int占4字节，所以加4
    return v;
}

@Override
public long readLong() {
    long v = _getLong(readerIndex);
    readerIndex += 8;//读取数据后移动读索引，Long占8字节，所以加8，此外Double是基于Long实现的。
    return v;
}
```
