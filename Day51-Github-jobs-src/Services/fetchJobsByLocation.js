import api from './api'

export const fetchJobsByLocation = (location) => api.get(`/positions.json?&location=${location}`);