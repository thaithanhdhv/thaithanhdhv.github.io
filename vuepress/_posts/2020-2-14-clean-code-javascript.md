---
date: 2020-2-14
tag:
  - javascript
  - cleancode
author: junokyo
location: Viet Nam
search: true
---

# Clean Code In Javascript - Fuction

### Số lượng biến

Giới hạn số biến tối đa của function thực sự rất quan trọng. Vì điều đó sẽ làm cho việc test function của bạn dễ dàng hơn.
Hãy thử tưởng tượng bạn có nhiều hơn 3 biến ở trong một function thì bạn sẽ có rất nhiều case phải test để có thể  đầy đủ các case cho từng biến và sự liên kết giữa các biến với nhau.

Hãy giới hạn chỉ có 1 hoặc 2 biến ở trong một function của bạn. Hoặc có thể tối đa là ba.
Việc bạn sử dụng nhiều biến quá trong một function sẽ tăng độ phức tạp của function đó cũng như bạn phải thực hiện nhiều thứ trong một function.
Điều đó thật sự không nên.

Trong trường hợp bạn sử dụng nhiều biến, hãy sử dụng Object thay vì khai báo riêng từng biến, điều đó sẽ giúp cho code của bạn dễ đọc hơn.

**Bad:**

```javascript
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

createMenu("Foo", "Bar", "Baz", true);

```

**Good:**

```javascript
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

### Mỗi function chỉ thực hiện  một công việc

Đây thực sự là một rule quan trọng trong việc lập trình. Khi một function làm quá nhiều việc, chúng ta sẽ phải xử lý, handle, đọc cũng như test rất khó khăn.
Khi một function chỉ làm một việc, thì tất cả những điều trên sẽ trở nên dễ dàng.

**Bad:**

```javascript
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```

**Good:**

```javascript
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```


### Tên function
Cách đặt tên function cũng giống như cách đặt tên biến vậy.
Tên function cần phải phản ánh được function đó làm gì.
Nếu function làm công việc A thì bạn không thể đặt tên function liên quan đến công việc B được.
Bạn đang cố hack não chính bạn và người review, đọc code đấy :v

**Bad:**

```javascript
function addToDate(date, month) {
  // ...
}

const date = new Date();

// It's hard to tell from the function name what is added
addToDate(date, 1);
```

**Good:**

```javascript
function addMonthToDate(month, date) {
  // ...
}

const date = new Date();
addMonthToDate(1, date);
```

### DRY - Remove duplicate code
DRY là viết tắt của Don't Repeat Yourself.
Việc lặp code là rất tệ vì điều  đó có nghĩa là khi bạn muốn thay đổi một logic nào đó thì bạn phải thay đổi ở nhiều nơi.
Bên cạnh đó còn làm cho số dòng code của bạn nhiều lên một cách không cần thiết.
Nếu như các fuction có nhiều điểm chung, đừng viết nó lặp lại nhiều lần.
Đừng tự chính mình làm khó mình khi phải thay đổi logic cho một cái gì đó :D

**Bad:**

```javascript
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}
```

**Good:**

```javascript
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience
    };

    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```


### Set default objects with Object.assign

**Bad:**

```javascript
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);
```

**Good:**

```javascript
const menuConfig = {
  title: "Order",
  // User did not include 'body' key
  buttonText: "Send",
  cancellable: true
};

function createMenu(config) {
  config = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true
    },
    config
  );

  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);
```

### Đừng viết Global Function
Việc sử dụng Global Function được cảnh báo sử dụng trong hầu hết các ngôn ngữ lập trình.
Vì tính ảnh hưởng của nó khá cao, bạn không thể kiểm soát được ảnh hưởng của nó.
Nên nếu định viết một thứ gì đó mang tính Global, hãy suy xét cẩn thận.

**Bad:**

```javascript
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};
```

**Good:**

```javascript
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```


### Đóng gói điều kiện

**Bad:**

```javascript
if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}
```

**Good:**

```javascript
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

### Tránh điều kiện phủ định

**Bad:**

```javascript
function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}
```

**Good:**

```javascript
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}
```

### Remove dead code
Dead code - code không được sử dụng cũng không tốt giống như là việc lặp code.
Vì đó là những code đã không được sử dụng nên việc xóa chúng đi cũng không ảnh huởng gì cả.
Nếu bạn lo lắng tới việc lưu lại lịch sử để  đề phòng trường hợp sau này có down version thì đừng lo.
Vì Github, Gitlab đã làm hết cho bạn.

**Bad:**

```javascript
function oldRequestModule(url) {
  // ...
}

function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker("apples", req, "www.inventory-awesome.io");
```

**Good:**

```javascript
function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker("apples", req, "www.inventory-awesome.io");
```
