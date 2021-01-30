import * as React from 'react'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export const firebaseConfig = {
  apiKey: 'AIzaSyBMtmQ2OBtsnmRPi_VFCVhqZjrKR2qK8zg',
  authDomain: 'olympic-quote.firebaseapp.com',
  databaseURL: 'https://olympic-quote-default-rtdb.firebaseio.com',
  projectId: 'olympic-quote',
  storageBucket: 'olympic-quote.appspot.com',
  messagingSenderId: '223932978638',
  appId: '1:223932978638:web:649c98f1bbddc214ed079f',
  measurementId: 'G-Q4YZXLY843',
}

const theme = extendTheme({
  colors: {
    brand: {
      green: '#41e694',
      yellow: '#fff178',
    },
  },
})

const AppProviders: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf traceId={'loading-app-status'} fallback={<div>loading...</div>}>
        <ChakraProvider theme={theme} resetCSS>
          <Router>{children}</Router>
        </ChakraProvider>
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  )
}

export { AppProviders }
