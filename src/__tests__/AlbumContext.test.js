import AlbumContext, {clearAlbum, setAlbumProp, Album} from '../AlbumContext';

describe('AlbumContext', () => {
  const beginAlbum = {
    id: '',
    userId: '',
    title: '',
    selectedPhoto: {},
    photos: []
  };
  const albumAfterSetProp = {
    id: 1,
    userId: 1,
    title: 'title',
    selectedPhoto: {},
    photos: []
  };

  it('test begin album from AlbumContext', () => {    
    expect(Album).toEqual(beginAlbum);
  }); 
  
  it('test album after set property from AlbumContext', () => {
    setAlbumProp('id', 1);
    setAlbumProp('userId', 1);
    setAlbumProp('title', 'title');    
    expect(Album).toEqual(albumAfterSetProp);
  });
  
  it('test clear album from AlbumContext', () => { 
    clearAlbum();   
    expect(Album).toEqual(beginAlbum);
  });
});