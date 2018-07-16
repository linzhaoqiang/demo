import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
    products: [
      { name: 'dva', id: 1, state: false},
      { name: 'antd', id: 2,state: true},
    ],
    },
  });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/list').default);
app.model(require('./models/add').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
