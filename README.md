# react-native-switch-ios

React native iOS switch component that can be used in android and iOS projects with active and inactive color customization and cool iOS toggle animation .

### Preview


<img align=top src="https://user-images.githubusercontent.com/63982703/227421863-4c8937ef-8318-498e-b2db-8167e1d78011.gif" width="300" height="600" />  

### Installation


```sh
$ npm install --save react-native-switch-ios
```

or

```sh
yarn add react-native-switch-ios
```

or

```sh
pnpm add react-native-switch-ios
```

### Usage

```javascript
import { useState } from "react";
import { Switch } from "react-native-switch-ios";

export const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
      <Switch
         inactiveBgColor="#7d7d7d"
         activeBgColor"#34c759"
         isOn={toggle}
         onToggle={() => setToggle((prev) => !prev)} 
      />
  )
};
```
## Developer

[@1mehdifaraji](https://github.com/1mehdifaraji)
