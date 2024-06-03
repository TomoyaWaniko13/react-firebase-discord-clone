import { useEffect, useState } from 'react';

import { collection, DocumentData, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/firebase.ts';

interface Channels {
  id: string;
  channel: DocumentData;
}

const useFireStoreCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);

  // For getting data with Could Firestore, check for this documentation:
  // https://firebase.google.com/docs/firestore/query-data/get-data
  // For getting realtime updates with Cloud Firestore, check for this documentation:
  // https://firebase.google.com/docs/firestore/query-data/listen

  const q = query(collection(db, data));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        }),
      );
      setDocuments(channelsResults);
    });

    return () => unsubscribe();
  }, []);

  return { documents };

  // console.log(channels);
};

export default useFireStoreCollection;
