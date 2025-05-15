import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and API key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

function DailyCommentInput() {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('daily_comments') // Replace with your table name
        .insert([
          { comment_text: comment, created_at: new Date() }, // Assuming columns 'comment_text' and 'created_at'
        ]);

      if (error) {
        console.error('Error inserting comment:', error);
        setError('Failed to add comment.');
      } else {
        console.log('Comment added successfully:', data);
        setComment(''); // Clear the input field
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Today's Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment for today..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Comment'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default DailyCommentInput;