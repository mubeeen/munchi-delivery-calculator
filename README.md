
# Munchi Delivery Fee Calculator

This is the **Munchi Delivery Fee Calculator** web application built with **React** and **TypeScript**. The application calculates the delivery fee based on several parameters like cart value, delivery distance, amount of items, and time (considering rush hours).

## Features

- Calculate the delivery fee based on the cart value, delivery distance, amount of items, and time of the order.
- Free delivery for orders over 100€.
- Delivery fee surcharge for carts under 10€.
- Delivery distance fee based on the first 1000 meters and 1€ surcharge for every additional 500 meters.
- Additional surcharge for orders with 5 or more items.
- Friday rush hour surcharge (from 3 PM to 7 PM UTC).
- Cap the delivery fee at 15€.

## Tech Stack

- **Frontend**: React, TypeScript, Bootstrap
- **State Management**: React `useState` for managing form input states
- **Styling**: Bootstrap 5 for responsive design and styling
- **Build Tool**: Create React App

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/munchi-delivery-calculator.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies.

```bash
cd munchi-delivery-calculator
npm install
```

### 3. Start the Development Server

Once the dependencies are installed, you can start the development server with the following command:

```bash
npm start
```

Your app will be running at `http://localhost:3000`.

## Project Structure

Here's an overview of the project's directory structure:

```
src/
|-- components/
|   |-- DeliveryFeeCalculator.tsx          # Main calculator component
|   |-- common/
|       |-- CustomInput.tsx                # Reusable input component
|-- utils/
|   |-- calculateDeliveryFee.ts           # Utility function for calculating delivery fee
```

- **`DeliveryFeeCalculator.tsx`**: The main React component that handles state management, inputs, and calculates the delivery fee based on user inputs.
- **`CustomInput.tsx`**: A reusable input field component for handling various types of input fields.
- **`calculateDeliveryFee.ts`**: A utility file that contains the core logic for calculating the delivery fee based on the input values.

## How to Use

### Step 1: Enter the Cart Value
- Input the value of your cart (numeric).

### Step 2: Enter the Delivery Distance
- Input the distance from the store to the customer in meters.

### Step 3: Enter the Amount of Items
- Enter the number of items in the cart.

### Step 4: Select the Order Time
- Select the date of the order. If the order is placed on a Friday between 3 PM to 7 PM UTC, a rush hour surcharge will be applied.

### Step 5: Calculate Delivery Fee
- Click the **"Calculate Delivery Price"** button to see the calculated delivery fee.

## Example:

- **Cart Value**: 15€
- **Delivery Distance**: 1500 meters
- **Amount of Items**: 6
- **Date**: 2024-12-15 (Any time)

The calculated delivery fee will be based on the conditions mentioned above.
