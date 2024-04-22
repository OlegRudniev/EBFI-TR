
import React, { useState, useEffect } from 'react';

const DateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Обновляем каждую секунду

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    const formattedDateTime = currentDateTime.toLocaleString();

    return (
        <div>
            <p> {formattedDateTime}</p>
        </div>
    );
};

export default DateTime;
