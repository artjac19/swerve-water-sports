<script setup>

defineProps({
    action: {
        type: String,
        default: "https://www.paypal.com/cgi-bin/webscr"
    },
    buttonId: {
        type: String,
        default: "THWYXNZ5ZKD78",
        required: true
    },
    label: {
        type: String,
        default: "Waterskiing"
    },
    options: {
    type: Array,
    default: () => [
      { value: 'Lesson', label: 'Lesson $50.00 USD' },
      { value: 'Ten Pack', label: 'Ten Pack $400.00 USD' },
      { value: '1 Day Lessons', label: '1 Day Lessons $140.00 USD' },
      { value: 'Season Pass', label: 'Season Pass $2,450.00 USD' }
    ]
  },
    payButtonLabel: {
        type: String,
        default: "Pay with PayPal"
    }
});
</script>


<template>
    <div>
        <form :action="action" method="post" target="paypal">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" :value="buttonId">
            <p style="margin: 0; padding-bottom: 1vh;">
                <input type="hidden" name="on0" :value="label"> {{ label }}
            </p>
            <select name="os0">
                <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}
                </option>
            </select>
            <input type="hidden" name="currency_code" value="USD">
            <button type="submit" class="submit-button" style="margin-top: 1vh;">{{ payButtonLabel }}</button>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0vh;
    background-color: #333;
    padding: 2vh;
    border-radius: 8px;
}

select {
    font-family: 'Montserrat', serif;
    font-size: .9em;
    border: none;
    border-radius: 4px;
    background-color: #444;
    color: white;
    line-height: 2;
    padding: 1.3vh;
}

.submit-button {
    font-family: 'Montserrat', serif;
    font-size: .9em;
    color: white;
    background-color: #28a745;
    padding: 1.3vh;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
}

.submit-button:hover {
    background-color: #218838;
}
</style>