# React Native Uninitialized State Variable

This repository demonstrates a common error in React Native: attempting to access a state variable before it has been initialized.  The example shows how to reproduce the error and provides a solution using optional chaining or a conditional check.

## Reproducing the Error

The `uninitializedState.js` file demonstrates the error by accessing the `count` state variable before it's set in the `useEffect` hook. This attempts to display the value of `count` immediately upon render.  

## Solution

The `initializedState.js` file shows the corrected version.  It uses optional chaining to safely access `count`, handling the case where `count` might be `undefined` or `null`.  An alternative is to use a conditional rendering, only showing the value of `count` when it is initialized.

## How to Run

1. Clone the repository.
2. Navigate to the directory in your terminal.
3. Run `npm install`.
4. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the app on an emulator or device. 

