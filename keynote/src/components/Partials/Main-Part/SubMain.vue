<template>
    <!-- Box Sub -->
    <section class="box-sub">

        <div class="card-time">
            <div class="time-box">
                <span class="number">{{displayDays}}</span>
                <span class="time">DAYS</span>
            </div>
            <div class="time-box">
                <span class="number">{{displayHours}}</span>
                <span class="time">HOURS</span>
            </div>
            <div class="time-box">
                <span class="number">{{displayMinutes}}</span>
                <span class="time">MINS</span>
            </div>
            <div class="time-box">
                <span class="number">{{displaySeconds}}</span>
                <span class="time">SECS</span>
            </div>
        </div>

        <span>SUBSCRIBE FOR UPDATE</span>

        <div class="box-subscribe">
            <input placeholder="Please fill your email" class="text-sub" type="text">
            <a class="btn-sub"  href="#">SUBSCRIBE</a>
        </div>
        
    </section>
    <!-- Box Sub -->
</template>

<script>
export default {
    data() {
        return {
            displayDays: '',
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0 
        }
    },

    computed: {
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
    },

    methods: {
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const end = new Date(2028, 8, 24, 10, 10, 10, 10);
                const distance = end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displayDays = days < 10 ? "0" + days : days;
            }, 1000)
        }   
    },
    
    created() {
        this.showRemaining()
    }
    
}
</script>

<style lang="scss">
    .box-sub {
        height: 345px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-image: url('./img/coutdown-bg1.jpg');
        background-position: center;
        background-size: cover;

        .card-time {
            width: 500px;
            display: flex;
            flex-direction: row;

            .time-box {
                max-width: 140px;
                height: 95px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.7);
                border-radius: 5px;
                margin: 0px 9px;

                .number {
                    padding: 0px 25px;
                    color: #FBFBFA;
                    font-size: 42px;
                    margin-top: 6px;
                    font-weight: bold;
                }

                .time {
                    color: #FBFBFA;
                    font-size: 12px;
                    margin-top: -10px;
                }
            }
        }

        span {
            color: #424242;
            font-size: 19px;
            font-weight: bold;
            letter-spacing: 2px;
            margin-top: 25px;
        }

        .box-subscribe {
            margin-top: 15px;
            display: flex;
            align-items: flex-end;

            .text-sub {
                padding: 10px 15px;
                width: 320px;
                border: 0px;
                outline: none;
            }

            .text-sub::placeholder {
                font-size: 13px;
                color: #B5B5B5;
            }

            .btn-sub {
                color: #fff;
                text-decoration: none;
                padding: 12.4px 16px;
                margin-left: 15px;
                border-bottom: 3px solid #A72510;
                background-color: #F62B0A;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 1px;
                margin-top: 25px;
            }

            .btn-sub:hover {
                background-color: #cc1b00;
            }
        }
    }
</style>