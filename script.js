body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.calculator {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#display {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: right;
    padding-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f1f1f1;
}

button:hover {
    background-color: #ddd;
}

.equals {
    background-color: #4CAF50;
    color: white;
}

.equals:hover {
    background-color: #45a049;
}

.zero {
    grid-column: span 2;
}
