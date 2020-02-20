export default {
    template: `
    <section class="chatPage">
        <section class="form-container">
            <label for="nickname">Your Nickname (optional)</label>
            <input type="text" id="nickname" class="nickname" placeholder="What is your nickname?">

            <form>
                <label for="message">Something to say?</label>
                <textarea v-model="message" class="message" type="text" autocomplete="off" id="textarea"></textarea>
                <input @click.prevent="dispatchMessage" type="submit">
            </form>
        </section>

        <section class="messages">
            <ul id="messages">
                <!-- render a new message component for every message -->
                <newmessage v-for="message in messages" :msg="message"></newmessage>
            </ul>
        </section>
    </section>
    `,

    created: function() {
        console.log("Chat Page Rendered");
    }
}