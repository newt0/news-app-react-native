import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { addClip, deleteClip } from '.././store/actions/user';
import ClipButton from '../components/ClipButton';

const ArticleScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { article } = route.params;
  const user = useSelector((state) => state.user);
  const { clips } = user;

  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen;
