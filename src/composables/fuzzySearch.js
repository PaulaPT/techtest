import Fuse from 'fuse.js';
import { storeToRefs } from 'pinia';
import { useFilterStore } from '../stores/filterStore.js';

export function useFuzzySearch() {
    const fuzzyOptions = { 
      isCaseSensitive: false,
      includeMatches: true,
      threshold: 0.1,
      distance: 10,
      tokenize: true
    };

    function searchClients () { 
      const filterStore = useFilterStore();
      const { inputSearchValue, clientList, clientsFiltered } = storeToRefs(filterStore);

      const data = Object.values(clientList.value).map(item => ({
        fullName: item[0],
        identification: item[1],
        gender: item[2],
        registrationDate: item[3],
        userStatus: item[4]
      }));
      
      const options = { 
        keys: [ 'fullName', 'identification', 'gender', 'registrationDate', 'userStatus' ],
        ...fuzzyOptions
      };
      
      const fuse = new Fuse(data, options);
      clientsFiltered.value = [ ...fuse.search(inputSearchValue.value).map(result => { return Object.values(result.item); }) ]; 
      if (inputSearchValue.value === '') { clientsFiltered.value = [ ...clientList.value ]; }
    }

    function searchServices () { 
      const filterStore = useFilterStore();
      const { inputSearchValue, serviceList, servicesFiltered } = storeToRefs(filterStore);

      const data = Object.values(serviceList.value).map(item => ({
        serviceType: item[0],
        description: item[1],
        price: item[2],
        contractStartDate: item[3],
        contractEndDate: item[4]
      }));
      
      const options = { 
        keys: [ 'serviceType', 'description', 'price', 'contractStartDate', 'contractEndDate' ],
        ...fuzzyOptions
      };
      
      const fuse = new Fuse(data, options);
      servicesFiltered.value = [ ...fuse.search(inputSearchValue.value).map(result => { return Object.values(result.item); }) ]; 
      if (inputSearchValue.value === '') { servicesFiltered.value = [ ...serviceList.value ]; }
    }

    return { 
      searchClients, 
      searchServices 
    };
  }
