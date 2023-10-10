"use client";

import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { db } from "../firebase/firebase";

export default function Page() {
  const [items, setItems] = useState({ name: "" });

  const addItem = async (e) => {
    e.preventDefault();
    if (items.name !== "") {
      await addDoc(collection(db, "items"), {
        name: items.name.trim(),
      });
    }
  };

  return (
    <div>
      <form>
        <input
          value={items.name}
          onChange={(e) => setItems({ ...items, name: e.target.value })}
          type="text"
          placeholder="Enter your name"
        />
        <button onClick={addItem} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
