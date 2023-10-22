import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Post from '../Components/Post';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

const Homescreen = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('https://workshop.elyasasmad.com/posts')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        })
    }, []);
  
    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Post
              likes={item.data.likes}
              comments={item.data.comments}
              reposts={item.data.reposts}
              photoURL={item.photoURL}
              userName={item.username}
              userId={"@random"}
              time={"A few days ago"}>
              {item.content}
            </Post>
          )}
          keyExtractor={(item) => item.id}
        />
        <StatusBar style="auto" />
      </View>
    );
}
export default Homescreen

const styles = StyleSheet.create({})