const url = 'http://localhost:5000';


// **** fetching create course (Add Course) **** 
export const getCreateCourse = async (): Promise <any> => {
    const res = await fetch(`${url}/readCourse`);
    const todo = await res.json();
    return todo;

}

// **** fetching update course (Edit Course) **** 
export const getUpdateCourse = async (): Promise <any> => {
    const res = await fetch(`${url}/updateCourse`);
    const todo1 = await res.json();
    return todo1;

}

// **** fetching delete course **** 
export const getDeleteCourse = async (): Promise <any> => {
    const res = await fetch(`${url}/deleteCourse`);
    const todo2 = await res.json();
    return todo2;

}

