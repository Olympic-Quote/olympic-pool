import * as React from 'react'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'

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

const AppProviders: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf traceId={'loading-app-status'} fallback={<div>loading...</div>}>
        {children}
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  )
}

export { AppProviders }
