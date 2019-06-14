## 页面 A
### import { DeviceEventEmitter } from 'react-native';

### componentDidMount() {
    
### //收到监听

###     this.listener = DeviceEventEmitter.addListener('通知名称', (message) => {

###     //收到监听后想做的事情

###     console.log(message);
###   //监听
    })
}


### componentWillUnmount() {

###     //移除监听

###     if (this.listener) {

###       this.listener.remove();

###     }

###   }
### 
## 页面B
### import { DeviceEventEmitter } from 'react-native';
### func() {
### //准备值，发监听
### const message = '监听';
### DeviceEventEmitter.emit('通知名称', message);
### }
