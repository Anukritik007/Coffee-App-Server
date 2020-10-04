import { mockData} from './mock-data';
import { Boom } from '@hapi/boom';

export const getArtWork = {
    method: 'GET',
    path : '/api/art/{id}',
    handler : (req, h)=>{
        const id_ = req.params.id;
        const art_ =  mockData.find(art => art.id === id_);
        if(!art_) throw Boom.notFound(`Art work does not exist with id ${id_}`);
        return art_;
    }
}