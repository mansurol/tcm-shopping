import React, { useState,useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { useGetSearchProductQuery } from '../Redux/Api/ProductsApi';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const { data, isSuccess, isError, isFetching, isLoading,refetch  } = useGetSearchProductQuery(searchText)
  // const cart = useSelector(state => state.cartReducer)

  useEffect(()=>{
    //console.log("Product:", data)
  },[isSuccess])

  //console.log(isFetching, isLoading, isSuccess, isError, refetch )
  const handleSearch = (q) => {
    // Perform search based on searchText
    setSearchText(q);
    refetch()
    //console.log('Searching for:', searchText);
  };

  return (
    <SafeAreaView>
      <View style={{marginTop:65}}>
        <Image
          source={require('../../assets/2650577-removebg-preview.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Search for your desired products</Text>
          <Text style={styles.text}>(e.g. eggs, milk)</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search" 
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  image: {
    width: '90%',
    height: 150,
  },
  textContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontWeight: '300',
    fontSize: 16,
  },
  searchContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default SearchScreen;