// the export statement means that everything inside the curly braces 
// will be made public when you import this file into another via the import statement

export default {
    props: ['msg'],

    template: `
            <p class="new-message" :class="{ 'my-message' : matchedID}">
                <span>{{ msg.message.name }} says:</span>
                {{ msg.message.content }}
            </p>
    `,

    data: function() {
        return { 
            message: "template is running", 
            matchedID: this.$parent.socketID == this.msg.id
        };
    }
}