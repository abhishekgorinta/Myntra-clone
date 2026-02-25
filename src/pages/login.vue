<template>
    <div class="login">
        <div class="login-card">
            <div class="login-card-t">
                <img src="../assets/login-t.png" alt="loginimage">
            </div>

            <!-- Login / Phone input card (hidden when OTP shown) -->
            <div class="login-card-b" v-if="!showOtp">
                <h3>Login or Signup</h3>
                <input type="tel" v-model="phone" placeholder="+91 | Mobile Number" inputmode="numeric" maxlength="10"
                    @input="sanitizePhone" required />
                <p class="error-message" v-if="message">{{ message }}</p>
                <div class="check">
                    <input type="checkbox" v-model="agreed">
                    <p>By continuing, i agree to the <b>Terms of Use &
                            Privacy Policy</b> and I am above 18 years old.
                    </p>
                </div>
                <button @click="requestOtp">continue</button>
                <p>Have trouble loggin in?<b><router-link to="/">Get help</router-link></b>
                </p>
            </div>

            <!-- OTP card (appears in same place) -->
            <div class="login-card-b otp-card" v-if="showOtp">
                <h3>Enter OTP</h3>
                <p class="small-note">We sent an OTP to <strong>{{ phoneDisplay }}</strong></p>
                <div class="otp-inputs">
                    <input v-for="(n, idx) in 4" :key="idx" ref="otpRefs" class="otp-box" inputmode="numeric"
                        pattern="[0-9]*" maxlength="1" :value="otpDigits[idx]" @input="onInput(idx, $event)"
                        @keydown="onKeydown(idx, $event)" @paste="onPaste($event)" />
                </div>
                <p class="visible-otp">Demo OTP: <b>{{ generatedOtp }}</b></p>
                <div class="check" style="margin-top:6px; margin-bottom:12px;">
                    <input type="checkbox" v-model="remember">
                    <p>Remember this device</p>
                </div>
                <button @click="verifyOtp">Verify</button>
                <p class="result" v-if="message">{{ message }}</p>
                <p style="margin-top:8px;">Didn’t receive OTP? <a href="#" @click.prevent="resendOtp">Resend</a></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import confetti from 'canvas-confetti'

const router = useRouter()
const phone = ref('')
const agreed = ref(false)
const showOtp = ref(false)
const generatedOtp = ref('')
const otpDigits = ref(['', '', '', ''])
const otpRefs = ref([])
const message = ref('')
const remember = ref(false)

const phoneDisplay = computed(() => phone.value || 'your number')

import { nextTick } from 'vue'

function generateOtp() {
    return String(Math.floor(1000 + Math.random() * 9000))
}

function requestOtp() {
    message.value = ''
    if (!/^\d{10}$/.test(phone.value)) {
        message.value = 'Please enter a valid 10-digit phone number'
        return
    }
    if (!agreed.value) {
        message.value = 'Please accept the Terms to continue.'
        return
    }
    generatedOtp.value = generateOtp()
    otpDigits.value = ['', '', '', '']
    showOtp.value = true
    // focus first input next tick
    nextTick(() => {
        if (otpRefs.value && otpRefs.value[0]) otpRefs.value[0].focus()
    })
}

function sanitizePhone(e) {
    const cleaned = (e.target.value || '').replace(/\D/g, '').slice(0, 10)
    phone.value = cleaned
}

const enteredOtp = computed(() => otpDigits.value.join(''))

function sayYes() {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function verifyOtp() {
    if (!enteredOtp.value) {
        message.value = 'Please enter the OTP.'
        return
    }
    if (enteredOtp.value === generatedOtp.value) {
        message.value = 'Login successful ✅'
        sayYes()
        // Navigate to home after confetti animation completes
        setTimeout(() => {
            router.push('/')
        }, 2500)
    } else {
        message.value = 'Invalid OTP. Please try again.'
    }
}

function resendOtp() {
    generatedOtp.value = generateOtp()
    otpDigits.value = ['', '', '', '']
    message.value = 'A new OTP has been generated (demo).'
    nextTick(() => {
        if (otpRefs.value && otpRefs.value[0]) otpRefs.value[0].focus()
    })
}

function onInput(idx, e) {
    const val = (e.target.value || '').replace(/\D/g, '').slice(-1)
    otpDigits.value[idx] = val
    if (val && idx < 3) {
        // focus next
        nextTick(() => {
            const next = otpRefs.value[idx + 1]
            if (next) next.focus()
        })
    }
}

function onKeydown(idx, e) {
    const key = e.key
    if (key === 'Backspace') {
        if (!otpDigits.value[idx] && idx > 0) {
            otpDigits.value[idx - 1] = ''
            nextTick(() => {
                const prev = otpRefs.value[idx - 1]
                if (prev) prev.focus()
            })
        } else {
            otpDigits.value[idx] = ''
        }
    } else if (key === 'ArrowLeft' && idx > 0) {
        nextTick(() => otpRefs.value[idx - 1]?.focus())
    } else if (key === 'ArrowRight' && idx < 3) {
        nextTick(() => otpRefs.value[idx + 1]?.focus())
    }
}

function onPaste(e) {
    const paste = (e.clipboardData || window.clipboardData).getData('text') || ''
    const digits = paste.replace(/\D/g, '').slice(0, 4).split('')
    digits.forEach((d, i) => {
        otpDigits.value[i] = d
    })
    // focus after pasted digits
    const lastIdx = Math.min(digits.length, 4) - 1
    nextTick(() => {
        if (lastIdx >= 0 && otpRefs.value[lastIdx]) otpRefs.value[lastIdx].focus()
    })
}
</script>

<style>
.login {
    height: 90vh;
    background-color: #FDEEEB;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.login-card-t {
    width: 400px;
    background-color: white;
}

.login-card-t img {
    width: 100%;
    height: auto;
    display: block;
}

.login-card-b {
    width: 400px;
    padding: 40px;
    align-items: center;
    background-color: #fff;
}

.login-card-b h3 {
    margin-bottom: 20px;
    color: #424553;
    font-weight: bold;
}

.login-card-b p {
    font-size: 14px;
    color: #424553;
}

.login-card-b p.error-message {
    color: #FF3F6C;
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 13px;
}

.login-card-b p b {
    color: #FF688F;
}

.login-card-b input[type="tel"] {
    width: 100%;
    padding: 10px 20px;
    outline: 1px solid grey;
    border: none;
    margin-bottom: 20px;
    background-color: #fff;
    box-sizing: border-box;
}

.check {
    display: flex;
    margin-bottom: 20px;
    gap: 20px;
}

.login-card-b button {
    width: 100%;
    background-color: #93959E;
    color: white;
    border: none;
    outline: none;
    padding: 12px;
    cursor: pointer;
    font-weight: bold;
}

/* OTP specific styling */
.otp-card .visible-otp {
    font-size: 13px;
    color: #444;
    margin-bottom: 10px;
}

.otp-card .small-note {
    font-size: 13px;
    color: #666;
    margin-bottom: 10px;
}

.otp-card .result {
    margin-top: 10px;
    font-weight: 600;
}

.otp-inputs {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 8px;
}

.otp-box {
    width: 60px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.otp-box:focus {
    outline: 2px solid #FF688F;
    border-color: transparent;
}

/* Responsive Design */
@media (max-width: 768px) {
    .login {
        height: auto;
        min-height: 90vh;
        padding: 20px 10px;
    }

    .login-card-t {
        width: 100%;
        max-width: 350px;
    }

    .login-card-b {
        width: 100%;
        max-width: 350px;
        padding: 30px 20px;
    }

    .login-card-b h3 {
        font-size: 20px;
        margin-bottom: 15px;
    }

    .login-card-b p {
        font-size: 13px;
    }

    .login-card-b input[type="text"] {
        padding: 10px 15px;
        font-size: 14px;
    }

    .check {
        gap: 15px;
        margin-bottom: 15px;
    }

    .check p {
        font-size: 12px;
    }

    .login-card-b button {
        padding: 10px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .login {
        padding: 0px;
    }

    .login-card-t {
        max-width: 400px;
    }

    .login-card-b {
        max-width: 400px;
        padding: 20px 15px;
    }

    .login-card-b h3 {
        font-size: 18px;
        margin-bottom: 15px;
    }

    .login-card-b h3 span {
        display: block;
    }

    .login-card-b p {
        font-size: 12px;
        line-height: 1.4;
    }

    .login-card-b input[type="text"] {
        padding: 10px 12px;
        font-size: 13px;
        margin-bottom: 15px;
    }

    .check {
        gap: 10px;
        margin-bottom: 15px;
        align-items: flex-start;
    }

    .check input[type="checkbox"] {
        margin-top: 3px;
        flex-shrink: 0;
    }

    .check p {
        font-size: 11px;
        line-height: 1.3;
    }

    .login-card-b button {
        padding: 10px;
        font-size: 13px;
    }
}
</style>