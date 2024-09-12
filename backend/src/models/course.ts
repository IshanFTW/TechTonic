import { model, Schema } from "mongoose";

const coourseSchema = new Schema({
    title: String,
    description: String,
    instructor: {type: Schema.Types.ObjectId, ref: 'User'},
    lessons: [{title: String, videoUrl: String}],
    reviews: [{user: {type: Schema.Types.ObjectId, ref: 'User'}, rating: Number, comment: String}],
})

export const Course = model('Course', coourseSchema)