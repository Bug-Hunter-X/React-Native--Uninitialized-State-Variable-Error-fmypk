```javascript
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const InitializedState = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(10);
    }, 1000); 
  }, []);

  return (
    <View>
      <Text>Count: {count ?? 'Loading...'}</Text>  {/* Optional chaining */}
    </View>
  );
};

export default InitializedState;
```