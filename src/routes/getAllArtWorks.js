import { mockData} from './mock-data';

export const getAllArtWorks = {
    method: 'GET',
    path : '/api/art',
    handler : (req, h)=>{
        return mockData;
    }
}