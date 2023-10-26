<template >
  <v-app>
    
  <v-card max-width="250px" class="tab-container">
   
    <v-tabs height="50px" class="tabs" color="error"  slider-color="primary" >
      <v-tab class="tab-setting"  >Members</v-tab>
      <v-tab class="tab-setting">Admins</v-tab>
    </v-tabs>
    </v-card>
        <div class="total-members">Total Members:<span class="amount"> {{ members.length }}  </span><br> Current Used:</div> 

   <v-row class="button-row"  style="padding:30px; flex: none; ">
   
    <h1 class="header-text">Members</h1>
    
   
    <v-btn color="success" class="add-button" active-class @click="showAddDialog">Add new</v-btn>
      <v-btn class="import-button" outlined color="primary">Import members</v-btn>
      <v-btn class="export-butt`on" outlined color="primary">Export members (Excel)</v-btn>

      <v-spacer></v-spacer>
  
  
      
      <v-btn color="success" class="filter-button">&lt; Filter</v-btn>
    </v-row>

  <v-dialog v-model="addDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="dialog-title">Add New Member</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="firstName" label="First Name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="lastName" label="Last Name"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="username" label="Username"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="role"
                  :items="['admin', 'user']"
                  label="Role"
                ></v-select>
              </v-col>
            </v-row>
           <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="password" label="Password" type="password" prepend-icon="mdi-lock-outline"
             :rules="[required, min6]"
             :counter="6">
             <template v-slot:append>
              <v-icon
                 v-if="successPass"
                 color="green"
                 >{{ passRule }}</v-icon
                >
              <v-icon
                 v-if="!successPass"
                 color="red"
                 >{{ passRule }}</v-icon
                >
            </template>
            
            </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="confirmPassword" label="Confirm Password" type="password"  prepend-icon="mdi-lock-outline"
             :rules="[required, min6, matchingPasswords ]"
             :counter="6">
            <template v-slot:append>
              <v-icon
                v-if="successPass1"
                color="green"
                >{{ passRule1 }}</v-icon
              >
              <v-icon
                 v-if="!successPass1"
                 color="red"
                 >{{ passRule1 }}</v-icon
              >
            </template>
            
            </v-text-field>
 
            </v-col>
          </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="addMember"  :disabled="!isPasswordValid || isPasswordMismatch">Add</v-btn>
          <v-btn color="error" @click="cancelAdd">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
<v-card class="table-design">
    <v-simple-table style="padding:10px">
       <template v-slot:default>
      <thead>
        <tr  >
          <th  class="grey--text header-item">
            Username
          </th>
          <th  class="grey--text header-item">
           First Name
          </th>
             <th  class="grey--text header-item">
            Last Name
          </th>
             <th class="grey--text header-item">
            Role
          </th>
             <th  class="grey--text header-item">
           Operation
          </th>
          
        </tr>
      </thead>
      <tbody >
        <tr
          v-for="item in displayedMembers"
          :key="item.username"
        
        >
          <td class="table-item">{{item.username  }}</td>
          <td  class="table-item">{{ item.firstName }}</td>
          <td  class="table-item">{{ item.lastName }}</td>
          <td  class="table-item"><v-chip color="primary" text-color="white" small>{{ item.role }}</v-chip></td>
          <td  class="table-item"><v-icon color="primary">mdi-note-edit-outline</v-icon>  <v-icon color="primary"  @click="showDeleteConfirmDialog(item)" class="pointer">mdi-delete-outline</v-icon></td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
    <template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
               :length="Math.ceil(this.members.length / this.itemsPerPage)"
              color="primary"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  <v-dialog v-model="deleteConfirmDialog" max-width="400px">
    <v-card>
      <v-card-title class="headline">Confirm Deletion</v-card-title>
      <v-card-text>
        Are you sure you want to delete this member?
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="deleteMemberConfirmed">Delete</v-btn>
        <v-btn color="primary" @click="cancelDelete">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
    </v-card>
    </v-app>
  
   
</template>
<script>
  export default {
    
    data () {
      return {
        dialog: false,
         addDialog: false,
      firstName: '',
      lastName: '',
      username: '',
      role: '',
      password: '',
      confirmPassword: '',
      successPass: false,
      successPass1: false,
        members: [
          {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
             {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
             {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
           {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
             {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
             {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
             {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
              {
            username: 'mahsaabd',
            firstName: 'mahsa',
            lastName: 'abd',
            role:'admin'
          },
    
        ],
    itemsPerPage: 5, 
    page: 1, 
      deleteConfirmDialog: false,
      memberToDelete: null,
      }
    },
      watch: {
    password: 'checkPassword',
    confirmPassword: 'checkConfirmPassword',
  },


  computed: {
     passRule: function() {
      if (this.password === '') {
      
        return '';
      } else if (this.min6(this.password) === true) {
        // password ok

        return 'mdi-check';
      } else {
        // password wrong

        return 'mdi-close';
      }
    },
    passRule1: function() {
      if (this.confirmPassword === '') {
        // field is empty
     
        return '';
      } else if (this.min6(this.confirmPassword) === true && this.matchingPasswords() === true) {
     
        return 'mdi-check';
      } else {
        // password wse;
        return 'mdi-close';
      }
    },
  displayedMembers() {
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.members.slice(start, end);
  },
   isPasswordValid() {
      return this.min6(this.password) && this.matchingPasswords();
    },
  isPasswordMismatch() {
      return this.password !== this.confirmPassword;
    },
},
methods: {

   required: function(value) {
      if (value) {
        return true;
      } else {
        return 'This field is required.';
      }
    },
    min6: function(value) {
      if (value.length >= 6) {
        return true;
      } else {
        return 'Password should have more than 6 characters.';
      }
    },
    matchingPasswords: function() {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        return 'Passwords does not match.';
      }
    },

    showDeleteConfirmDialog(member) {
      this.memberToDelete = member;
      this.deleteConfirmDialog = true;
    },

    cancelDelete() {
      this.memberToDelete = null;
      this.deleteConfirmDialog = false;
    },

    deleteMemberConfirmed() {
      // Perform the logic to delete the member from the list
      if (this.memberToDelete) {
        const index = this.members.findIndex((m) => m.username === this.memberToDelete.username);
        if (index !== -1) {
          this.members.splice(index, 1);
        }
      }

      // Reset variables and close the dialog
      this.memberToDelete = null;
      this.deleteConfirmDialog = false;
    },
  

   showAddDialog() {
      this.addDialog = true;
    },
    cancelAdd() {
      this.addDialog = false;
      this.resetFields();
    },
  addMember() {
 
       
      if (this.isPasswordMismatch) {
        // Return early if the passwords don't match
        return;
      }

      // Perform the logic to add the member to the list
      this.members.push({
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
      });
      this.resetFields();
      this.addDialog = false;
    },
    resetFields() {
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.role = '';
      this.password = '';
      this.confirmPassword = '';
    },
     checkPassword() {
      if (this.password === '') {
        this.successPass = false;
      } else if (this.min6(this.password) === true) {
        this.successPass = true;
      } else {
        this.successPass = false;
      }
    },
    checkConfirmPassword() {
      if (this.confirmPassword === '') {
        this.successPass1 = false;
      } else if (this.min6(this.confirmPassword) === true && this.matchingPasswords() === true) {
        this.successPass1 = true;
      } else {
        this.successPass1 = false;
      }
    },
    

    
    
},


  }
  
</script>

<style scoped>
.total-members-text {
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
}
.tabs{
padding-top: 5;
  padding-left: 20px;
  padding-right: 5px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-transform: lowercase;

}
.tab-setting{
  text-transform: capitalize;

}
.tab-container{
margin: 30px;
}
.table-design{
 max-width: 100%; /* Ensure the table doesn't expand beyond its container */
  width: auto; /* Allow the table to adjust its width based on content */
  margin-left: 30px;
  margin-right:50px;
  padding-left:50px;


}
.table-item{
  border-bottom: none !important;
    border-collapse: collapse;
    color:#616161;
}
.header-item{
    border-bottom: none !important;
border-collapse: collapse;
font-size: 10px;
}
.header-text {
  color:#031942;
  font-size: 25px; /* Adjust the font size as needed */
  padding-right: 20px;
  padding-left: 20px;
  font-weight: 500;
}
.rounded-avatar img {
  border-radius: 20%;
}
.add-button{
  padding: 30px; 
  margin-right:30px;
  text-transform: capitalize;
}
.import-button{
   text-transform: capitalize;
   margin-right:30px;
}
.export-button{
    text-transform: capitalize;
    margin-right:30px;
}
.filter-button{
    text-transform: capitalize;
    margin-right:30px;
    margin-top: 10px;
}
.total-members {
  text-align: right;
  margin:0 auto;
  font-weight: 400;
  margin-top: -60px;
  margin-right: 50px;
  color: #98A1B2;
}
.amount{
  color:#5B6983;
}


</style>