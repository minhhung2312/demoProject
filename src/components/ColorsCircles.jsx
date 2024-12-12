import React from 'react';

function ColorCircles({ dataColors, onColorSelect }) {
    return (
        <div style={styles.container}>
            {dataColors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        ...styles.circle,
                        backgroundColor: color, // Set màu cho mỗi hình tròn
                    }}
                    onClick={() => onColorSelect(color)} // Gọi hàm callback khi click
                ></div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px", 
        padding: "20px",
    },
    circle: {
        width: "30px",
        height: "30px",
        borderRadius: "50%", 
        border: "1px solid #ccc", 
        cursor: "pointer", 
    },
};

export default ColorCircles;
