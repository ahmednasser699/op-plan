import _ from 'lodash';
const INITSTATE = {
    projects: [
        { id: 1, title: 'title-1', content: 'dsfks ndfk snfsn fls' },
        { id: 2, title: 'title-2', content: 'dsfks ndfk snfsn fls' },
        { id: 3, title: 'title-3', content: 'dsfks ndfk snfsn fls' },
        { id: 4, title: 'title-1', content: 'dsfks ndfk snfsn fls' },
        { id: 5, title: 'title-2', content: 'dsfks ndfk snfsn fls' },
        {id:6, title:'title-3', content:'dsfks ndfk snfsn fls' }
    ]
};

const ProjectReducer = (state=INITSTATE, action) => {
   switch (action.type) {
       case 'CREATE':
           return state
        case 'DELETE':  
           return _.omit(state, action.payload)
       default: 
           return state
   }
}
export default ProjectReducer