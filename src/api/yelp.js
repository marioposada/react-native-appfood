import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer Q5u14gQhPLqDwLIyJT7QfsE59baOsHbVjlSjaICxF6acmuGym7ALYzPEbXqaGVmKsmNn5e0cmSfUtSIBrP8nbXaHG6owk7ss4l7QSFm_7Cg2ggI3WVs75ZFQib0pY3Yx'
    }
})