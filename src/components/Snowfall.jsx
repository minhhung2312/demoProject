import React, { useRef, useEffect } from "react";
import "../assets/css/Snowfall.css";
import snowflakeImage from "../assets/img/snowflake.png"; // Đường dẫn đến ảnh PNG

const Snowfall = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const image = new Image();
        image.src = snowflakeImage;

        const snowflakes = Array.from({ length: 15 }, () =>
            createSnowflake(width, height)
        );

        function createSnowflake(canvasWidth, canvasHeight) {
            return {
                x: Math.random() * canvasWidth,
                y: Math.random() * canvasHeight,
                radius: Math.random() * 4 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 2 + 1,
            };
        }

        function drawSnowflake(snowflake) {
            // Vẽ hình ảnh thay vì hình tròn
            const size = snowflake.radius * 4; // Điều chỉnh kích thước ảnh
            ctx.drawImage(image, snowflake.x, snowflake.y, size, size);
        }

        function updateSnowflake(snowflake) {
            snowflake.x += snowflake.speedX;
            snowflake.y += snowflake.speedY;

            if (snowflake.y > canvas.height) {
                snowflake.y = 0;
                snowflake.x = Math.random() * canvas.width;
            }
            if (snowflake.x > canvas.width) {
                snowflake.x = 0;
            } else if (snowflake.x < 0) {
                snowflake.x = canvas.width;
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snowflakes.forEach((snowflake) => {
                updateSnowflake(snowflake);
                drawSnowflake(snowflake);
            });
            requestAnimationFrame(animate);
        }

        // Đảm bảo hình ảnh được tải xong trước khi bắt đầu hoạt hình
        image.onload = () => {
            animate();
        };

        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            snowflakes.length = 0;
            snowflakes.push(
                ...Array.from({ length: 100 }, () =>
                    createSnowflake(window.innerWidth, window.innerHeight)
                )
            );
        };
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return <canvas ref={canvasRef} className="snowfall-canvas" />;
};

export default Snowfall;
