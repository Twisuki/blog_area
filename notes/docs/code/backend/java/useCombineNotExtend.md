---
title: 使用组合而非继承的方式减少耦合
icon: file
order: 
date: ""
category:
  - Java
tags:
  - 设计模式
---


例子：电子商务订单处理系统
	1.	支付方式类（支付宝、微信支付、信用卡支付）

```
// 支付接口
interface PaymentMethod {
    void pay(double amount);
}

// 支付宝支付
class Alipay implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("Paying " + amount + " using Alipay.");
    }
}

// 微信支付
class WeChatPay implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("Paying " + amount + " using WeChat Pay.");
    }
}

// 信用卡支付
class CreditCard implements PaymentMethod {
    @Override
    public void pay(double amount) {
        System.out.println("Paying " + amount + " using Credit Card.");
    }
}
```
```
	2.	物流类（快递、送货上门）

```

```
// 物流接口
interface ShippingMethod {
    void ship(String address);
}

// 快递
class ExpressShipping implements ShippingMethod {
    @Override
    public void ship(String address) {
        System.out.println("Shipping to " + address + " via Express Shipping.");
    }
}

// 送货上门
class HomeDelivery implements ShippingMethod {
    @Override
    public void ship(String address) {
        System.out.println("Delivering to " + address + " via Home Delivery.");
    }
}
```

```
	3.	订单类（通过组合支付和物流功能扩展订单功能）

// 订单类
class Order {
    private PaymentMethod paymentMethod;
    private ShippingMethod shippingMethod;
    private double amount;
    private String deliveryAddress;

    // 通过构造函数组合支付方式和物流方式
    public Order(PaymentMethod paymentMethod, ShippingMethod shippingMethod, double amount, String deliveryAddress) {
        this.paymentMethod = paymentMethod;
        this.shippingMethod = shippingMethod;
        this.amount = amount;
        this.deliveryAddress = deliveryAddress;
    }

    // 处理订单
    void processOrder() {
        paymentMethod.pay(amount);           // 先支付
        shippingMethod.ship(deliveryAddress); // 再发货
        System.out.println("Order processed successfully!");
    }
}
```

	4.	使用订单类处理订单

```
public class Main {
    public static void main(String[] args) {
        // 选择支付方式和物流方式
        PaymentMethod paymentMethod = new Alipay();  // 选择支付宝支付
        ShippingMethod shippingMethod = new ExpressShipping();  // 选择快递物流

        // 创建订单并处理
        Order order = new Order(paymentMethod, shippingMethod, 199.99, "123 Main Street, City");
        order.processOrder();

        System.out.println("---");

        // 换一个支付方式和物流方式
        paymentMethod = new CreditCard();  // 选择信用卡支付
        shippingMethod = new HomeDelivery();  // 选择送货上门物流

        // 创建新的订单并处理
        order = new Order(paymentMethod, shippingMethod, 99.99, "456 Elm Street, City");
        order.processOrder();
    }
}
```

输出：

Paying 199.99 using Alipay.
Shipping to 123 Main Street, City via Express Shipping.
Order processed successfully!
---
Paying 99.99 using Credit Card.
Delivering to 456 Elm Street, City via Home Delivery.
Order processed successfully!

解释

在这个例子中，我们通过在 Order 类中组合了 PaymentMethod 和 ShippingMethod 接口的不同实现类，来处理不同的支付方式和物流方式。每个订单可以灵活地选择不同的支付方式（例如支付宝、微信支付、信用卡）和物流方式（例如快递、送货上门），而不需要在 Order 类中硬编码所有的支付和物流逻辑。

这种组合方法有以下优点：
	1.	灵活扩展：我们可以轻松地添加新的支付方式或物流方式，只需要实现相应的接口，并将其传递给 Order 类即可。例如，添加 PayPal 支付方式和 DroneShipping 快递方式都非常简单。
	2.	高内聚低耦合：每个类专注于单一的功能（支付、物流等），它们的实现相互独立，符合单一职责原则和松耦合原则。
	3.	避免复杂继承：通过组合来扩展功能，而不是通过继承，避免了复杂的继承体系，使代码更加清晰和易于维护。
	4.	开闭原则：在不修改现有代码的情况下，我们可以通过新增支付方式或物流方式来扩展订单处理功能，从而遵循开闭原则。

通过组合，Order 类变得非常灵活，可以根据需要动态地组合不同的支付和物流方式，满足不同业务需求