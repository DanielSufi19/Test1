import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Post = (props) => {
  return (
    <View style={styles.container1}>
      <View>
        <Image style={styles.tinyLogo}
          source={{
            uri: props.photoURL
          }}/>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.container2}>
          <Text style={styles.userName}>{props.userName}</Text>
          <Text style={styles.userId}>{props.userId}</Text>
          <Text style={styles.timePosted}>• {props.time}</Text>
        </View>
        <Text style={styles.body}>{props.children}</Text>
        <View style={styles.touchableContainer}>
          <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="comment-text-multiple-outline" size={15} color="black" />
            <Text style={styles.iconText}>
              {props.comments} comments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <FontAwesome5 name="retweet" size={15} color="black" />
          <Text style={styles.iconText}>
              {props.reposts} reposts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Octicons name="heart" size={15} color="black" />
          <Text style={styles.iconText}>
              {props.likes} likes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
    height: 200,
    width: 366,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
    flexDirection: "row",
    padding: 10,
    backgroundColor: 'white',
  },
  tinyLogo: {
    height: 40,
    width: 40,
    marginRight: 10,
    // marginTop: 10,
    borderRadius: 20,
  },
  container2: {
    flexDirection: "row",
  },
  userName: {
    marginRight: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  userId: {
    marginRight: 10,
    marginTop: 10,
    color: 'grey',
  },
  timePosted: {
    // marginLeft: 10,
    marginTop: 10,
  },
  body: {
    marginTop: 10,
    flex: 1,
  },
  touchableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
  },
  iconText: {
    marginLeft: 5,
    flexDirection: "row",
    fontSize: 12,
  },
  topContainer: {
    marginTop: 10,
  }
})
export default Post