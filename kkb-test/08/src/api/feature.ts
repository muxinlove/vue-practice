import axios from 'axios';
import { Feature } from '../types/index'

export function getFeature() {
  return axios.get<Feature[]>('/api/list')
}