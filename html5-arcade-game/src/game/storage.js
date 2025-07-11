export class GameStorage {
    constructor() {
        this.storageKey = 'neonRunner';
        this.defaultData = {
            highScore: 0,
            gamesPlayed: 0,
            totalCoins: 0,
            settings: {
                soundEnabled: true,
                volume: 0.5
            }
        };
    }

    load() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? { ...this.defaultData, ...JSON.parse(data) } : this.defaultData;
        } catch (e) {
            return this.defaultData;
        }
    }

    save(data) {
        try {
            const currentData = this.load();
            const newData = { ...currentData, ...data };
            localStorage.setItem(this.storageKey, JSON.stringify(newData));
            return true;
        } catch (e) {
            return false;
        }
    }

    updateHighScore(score) {
        const data = this.load();
        if (score > data.highScore) {
            data.highScore = score;
            this.save(data);
            return true;
        }
        return false;
    }

    incrementGamesPlayed() {
        const data = this.load();
        data.gamesPlayed++;
        this.save(data);
    }

    addCoins(coins) {
        const data = this.load();
        data.totalCoins += coins;
        this.save(data);
    }

    updateSettings(settings) {
        const data = this.load();
        data.settings = { ...data.settings, ...settings };
        this.save(data);
    }

    clear() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (e) {
            return false;
        }
    }
}