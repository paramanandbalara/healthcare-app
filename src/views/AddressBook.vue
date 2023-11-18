<template>
    <div class="container">
        <!-- Address List -->
        <div class="address-list">
            <div v-for="address in visibleAddresses" :key="address.id" class="address-item">

                <input type="radio" v-model="selectedAddress" :value="address.id" :id="'address-' + address.id"
                    class="address-radio">

                <label :for="'address-' + address.id" class="address-label">
                    {{ address.name }}, {{ address.flatRoomNo }}, {{ address.gali }},
                    {{ address.landmark }}, {{ address.pincode }}, {{ address.city }},
                    {{ address.state }} - {{ address.mobileNo }}
                </label>

                <button v-if="selectedAddress === address.id" class="delivery-btn">
                    Deliver Here
                </button>

                <button @click="editAddress(address.id)" class="edit-btn">
                    Edit
                </button>
            </div>

            <!-- Show More -->
            <button v-if="addresses.length > 3 && !showAll" @click="showAll = true" class="show-more-btn">
                Show More
            </button>
        </div>

        <!-- Add New Address -->
        <button @click="openAddPopup" class="add-address-btn">
            Add New Address
        </button>

        <!-- Add/Edit Address Popup -->
        <div v-if="showPopup" class="popup-overlay">
            <div class="popup">
                <input type="text" v-model="currentData.name" placeholder="Name">
                <input type="text" v-model="currentData.flatRoomNo" placeholder="Flat/Room No">
                <input type="text" v-model="currentData.gali" placeholder="Gali">
                <input type="text" v-model="currentData.landmark" placeholder="Landmark (Optional)">
                <input type="text" v-model="currentData.pincode" placeholder="Pincode">
                <input type="text" v-model="currentData.city" placeholder="City">
                <input type="text" v-model="currentData.state" placeholder="State">
                <input type="text" v-model="currentData.mobileNo" placeholder="Mobile No">

                <button @click="saveAddress" class="save-btn">Save Address</button>
                <button @click="showPopup = false" class="cancel-btn">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addresses: [
                {
                    id: 1,
                    name: 'John',
                    flatRoomNo: '101',
                    gali: 'Main Street',
                    landmark: 'Near Mall',
                    pincode: '123456',
                    city: 'Sample City',
                    state: 'Sample State',
                    mobileNo: '1234567890'
                },
                // Add more dummy data as needed
            ],
            currentData: {
                name: '',
                flatRoomNo: '',
                gali: '',
                landmark: '',
                pincode: '',
                city: '',
                state: '',
                mobileNo: ''
            },
            showAll: false,
            selectedAddress: null,
            showPopup: false,
            isEdit: false,
            editId: null
        };
    },
    computed: {
        visibleAddresses() {
            return this.showAll ? this.addresses : this.addresses.slice(0, 3);
        }
    },
    methods: {
        openAddPopup() {
            this.isEdit = false;
            this.currentData = {};
            this.showPopup = true;
        },
        editAddress(id) {
            this.isEdit = true;
            this.editId = id;
            this.currentData = { ...this.addresses.find(address => address.id === id) };
            this.showPopup = true;
        },
        saveAddress() {
            if (this.isEdit) {
                const index = this.addresses.findIndex(address => address.id === this.editId);
                this.addresses[index] = { ...this.currentData };
            } else {
                this.addresses.push({ ...this.currentData, id: Date.now() });
            }
            this.showPopup = false;
        }
    }
};
</script>

<style>
/* The CSS will have more details to make it look appealing, but this is a starting point. */
.container {
    padding: 2rem;
    background-color: #f5f5f5;
}

.address-item {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.address-radio {
    margin-right: 1rem;
}

.delivery-btn {
    margin-left: auto;
    background-color: orange;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
}

.edit-btn {
    margin-left: 0.5rem;
    background-color: lightblue;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
}

.show-more-btn,
.add-address-btn {
    margin-top: 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
}

.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    width: 80%;
    max-width: 400px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

input[type="text"] {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.save-btn,
.cancel-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 0.5rem;
}

.save-btn {
    background-color: #4CAF50;
    color: #fff;
}

.cancel-btn {
    background-color: #f44336;
    color: #fff;
}
</style>
