const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts)
})

//@desc Create contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req,res)=>{
   
    const {name,email,phone} =req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all fields required");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact)
})

//@desc Get contact
//@route Get /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    
    res.status(200).json(contact)
})


//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updateContact)
})


//@desc Delete contact
//@route Delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    // await Contact.remove();
    const deleteContact = await Contact.remove();
    res.status(200).json(contact)
})


module.exports = {
    getContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact
}