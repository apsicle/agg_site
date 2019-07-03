<template>
    <div id="grouped-checkbox" >
        <label for="parent">
            Select All
            <input @click.stop="handleParentClick" id="parent" type="checkbox" ref="parentCheckbox">
        </label>
        <div @click.stop="handleChildClick" id="children-container" ref="childDiv">

        </div>
        <input id="radio" type ="radio"/>
    </div>


</template>

<script>

export default {
    data() {
        return {
            inputSet: new Set()
        }
    },

    props: {
        inputs: Array
    },

    methods: {
        handleChildClick(event) {
            console.log(event, event.target);
        },

        handleParentClick(event) {
            if (this.$refs.parentCheckbox.checked === true) {
                this.toggleAll(true);
            } else {
                this.toggleAll(false);
            }
        },

        toggleAll(bool) {
            let div = this.$refs.childDiv;

            let children = div.children;
            for (let i = 0; i < children.length; i++) {
                children[i].firstElementChild.checked = bool;
            }

            if (bool) {
                this.inputSet.add.apply(this.inputSet, this.inputs);
            } else {
                this.inputSet.clear();
            }
        }
    },

    mounted() {
        let div = this.$refs.childDiv;
        for(let i = 0; i < this.inputs.length; i++) {
            let child = document.createElement('input');
            child.type = "checkbox";
            child.value = i+1;
            let label = document.createElement('label');
            label.appendChild(document.createTextNode(`${this.inputs[i]}`));
            label.appendChild(child);
            div.appendChild(label);
        }
    }
}


</script>

<style lang="scss">
    label {
        display: block;
    }
</style>