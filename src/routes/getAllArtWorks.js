import { mockData} from './mock-data';

export const getAllArtWorks = {
    method: 'GET',
    path : '/api/art-works',
    handler : (req, h)=>{
        return mockData;
    }
}