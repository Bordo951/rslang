import React from 'react';

interface MiniGamesLevelsInterface {
    gameId: number
}

const MiniGamesLevels: React.FC<MiniGamesLevelsInterface> = ({gameId}) => {
    let levelId = 'level-game-' + gameId;

    return (
        <div>
            <label>Уровень: </label>
            <select id={levelId}>
                <option value={1}>Начинающий</option>
                <option value={2}>Базовый</option>
                <option value={3}>Средний</option>
                <option value={4}>Выше среднего</option>
                <option value={5}>Продвинутый</option>
                <option value={6}>Носитель</option>
            </select>
        </div>
    );
};

export default MiniGamesLevels;
