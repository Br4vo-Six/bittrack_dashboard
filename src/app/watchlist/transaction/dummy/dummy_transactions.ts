export interface TransactionDataProps {
  hash_id: string;
  time: string;
  amount: number;
  input_total: number;
  output_total: number;
  input_address: Array<{
    address: string;
    trust_score: number;
    input_amount: number;
  }>;
  output_address: Array<{
    address: string;
    trust_score: number;
    output_amount: number;
  }>;
  weight: number;
  trusted: boolean;
  history: Array<{
    hash_id: string;
    totalAmount: number;
    trusted: boolean;
    from: Array<{ hash_id: string; amount: number; trusted: boolean }>;
    to: Array<{ hash_id: string; amount: number; trusted: boolean }>;
  }>;
}

const dummyData: TransactionDataProps[] = [
  {
    hash_id: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    time: "2024-07-20T11:58:08Z",
    input_total: 0.1,
    output_total: 0.05,
    amount: 0.15,
    input_address: [
      {
        address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 95,
        input_amount: 0.1,
      },
    ],
    output_address: [
      {
        address: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
        trust_score: 90,
        output_amount: 0.05,
      },
    ],
    weight: 200,
    trusted: true,
    history: [
      {
        hash_id:
          "c5d2460186f7233c927e5801c1a0fdbd41d8cd98f00b204e9800998ecf8427e",
        totalAmount: 0.02,
        trusted: true,
        from: [
          {
            hash_id:
              "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            amount: 0.01,
            trusted: true,
          },
          {
            hash_id:
              "90a1d5462a469f44cdb105306d57e9a2e8d4fb6ed62b5a3f2fa1190e52f01b8b",
            amount: 0.01,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id:
              "735a8332b8c84eac383ad0f8e3d3949d6564ed7a62bdf74bf6dd626a30bdf1d0",
            amount: 0.01,
            trusted: true,
          },
          {
            hash_id: "0cc175b9c0f1b6a831c399e269772661",
            amount: 0.01,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "c5d2460186f7233c927e5801c1a0fdbd41d8cd98f00b204e9800998ecf8427e",
    time: "2024-07-21T12:30:00Z",
    input_total: 0.04,
    output_total: 0.02,
    amount: 0.06,
    input_address: [
      {
        address: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
        trust_score: 90,
        input_amount: 0.04,
      },
    ],
    output_address: [
      {
        address: "1BoatSLRHtKNngkdXEeobR76b53LETtpyT",
        trust_score: 88,
        output_amount: 0.02,
      },
    ],
    weight: 250,
    trusted: true,
    history: [
      {
        hash_id:
          "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        totalAmount: 0.05,
        trusted: true,
        from: [
          {
            hash_id:
              "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            amount: 0.03,
            trusted: true,
          },
          {
            hash_id:
              "90a1d5462a469f44cdb105306d57e9a2e8d4fb6ed62b5a3f2fa1190e52f01b8b",
            amount: 0.02,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id:
              "c5d2460186f7233c927e5801c1a0fdbd41d8cd98f00b204e9800998ecf8427e",
            amount: 0.02,
            trusted: true,
          },
          {
            hash_id: "0cc175b9c0f1b6a831c399e269772661",
            amount: 0.03,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "90a1d5462a469f44cdb105306d57e9a2e8d4fb6ed62b5a3f2fa1190e52f01b8b",
    time: "2024-07-22T14:15:10Z",
    input_total: 0.02,
    output_total: 0.01,
    amount: 0.03,
    input_address: [
      {
        address: "1C1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 92,
        input_amount: 0.02,
      },
    ],
    output_address: [
      {
        address: "1Db1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 89,
        output_amount: 0.01,
      },
    ],
    weight: 180,
    trusted: false,
    history: [
      {
        hash_id:
          "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        totalAmount: 0.01,
        trusted: false,
        from: [
          {
            hash_id:
              "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            amount: 0.005,
            trusted: false,
          },
          {
            hash_id:
              "735a8332b8c84eac383ad0f8e3d3949d6564ed7a62bdf74bf6dd626a30bdf1d0",
            amount: 0.005,
            trusted: false,
          },
        ],
        to: [
          {
            hash_id:
              "90a1d5462a469f44cdb105306d57e9a2e8d4fb6ed62b5a3f2fa1190e52f01b8b",
            amount: 0.01,
            trusted: false,
          },
        ],
      },
    ],
  },
  {
    hash_id: "735a8332b8c84eac383ad0f8e3d3949d6564ed7a62bdf74bf6dd626a30bdf1d0",
    time: "2024-07-23T16:25:30Z",
    input_total: 0.06,
    output_total: 0.03,
    amount: 0.09,
    input_address: [
      {
        address: "1D1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 91,
        input_amount: 0.06,
      },
    ],
    output_address: [
      {
        address: "1E1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 85,
        output_amount: 0.03,
      },
    ],
    weight: 220,
    trusted: true,
    history: [
      {
        hash_id:
          "c5d2460186f7233c927e5801c1a0fdbd41d8cd98f00b204e9800998ecf8427e",
        totalAmount: 0.01,
        trusted: true,
        from: [
          {
            hash_id:
              "c5d2460186f7233c927e5801c1a0fdbd41d8cd98f00b204e9800998ecf8427e",
            amount: 0.005,
            trusted: true,
          },
          {
            hash_id:
              "90a1d5462a469f44cdb105306d57e9a2e8d4fb6ed62b5a3f2fa1190e52f01b8b",
            amount: 0.005,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id:
              "735a8332b8c84eac383ad0f8e3d3949d6564ed7a62bdf74bf6dd626a30bdf1d0",
            amount: 0.01,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "0cc175b9c0f1b6a831c399e269772661",
    time: "2024-07-24T18:35:40Z",
    input_total: 0.08,
    output_total: 0.04,
    amount: 0.12,
    input_address: [
      {
        address: "1F1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 89,
        input_amount: 0.08,
      },
    ],
    output_address: [
      {
        address: "1G1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 84,
        output_amount: 0.04,
      },
    ],
    weight: 210,
    trusted: false,
    history: [
      {
        hash_id:
          "735a8332b8c84eac383ad0f8e3d3949d6564ed7a62bdf74bf6dd626a30bdf1d0",
        totalAmount: 0.02,
        trusted: false,
        from: [
          {
            hash_id:
              "735a8332b8c84eac383ad0f8e3d3949d6564ed7a62bdf74bf6dd626a30bdf1d0",
            amount: 0.01,
            trusted: false,
          },
          {
            hash_id: "0cc175b9c0f1b6a831c399e269772661",
            amount: 0.01,
            trusted: false,
          },
        ],
        to: [
          {
            hash_id: "0cc175b9c0f1b6a831c399e269772661",
            amount: 0.02,
            trusted: false,
          },
        ],
      },
    ],
  },
  {
    hash_id: "c4ca4238a0b923820dcc509a6f75849b",
    time: "2024-07-25T20:45:50Z",
    input_total: 0.12,
    output_total: 0.06,
    amount: 0.18,
    input_address: [
      {
        address: "1H1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 87,
        input_amount: 0.12,
      },
    ],
    output_address: [
      {
        address: "1I1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 82,
        output_amount: 0.06,
      },
    ],
    weight: 230,
    trusted: true,
    history: [
      {
        hash_id:
          "c5d2460186f7233c927e5801c1a0fdbd41d8cd98f00b204e9800998ecf8427e",
        totalAmount: 0.03,
        trusted: true,
        from: [
          {
            hash_id:
              "c5d2460186f7233c927e5801c1a0fdbd41d8cd98f00b204e9800998ecf8427e",
            amount: 0.015,
            trusted: true,
          },
          {
            hash_id: "0cc175b9c0f1b6a831c399e269772661",
            amount: 0.015,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "c4ca4238a0b923820dcc509a6f75849b",
            amount: 0.03,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "eccbc87e4b5ce2fe28308fd9f2a7baf3",
    time: "2024-07-26T22:55:20Z",
    input_total: 0.16,
    output_total: 0.08,
    amount: 0.24,
    input_address: [
      {
        address: "1J1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 93,
        input_amount: 0.16,
      },
    ],
    output_address: [
      {
        address: "1K1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 88,
        output_amount: 0.08,
      },
    ],
    weight: 240,
    trusted: true,
    history: [
      {
        hash_id: "c4ca4238a0b923820dcc509a6f75849b",
        totalAmount: 0.05,
        trusted: true,
        from: [
          {
            hash_id: "c4ca4238a0b923820dcc509a6f75849b",
            amount: 0.025,
            trusted: true,
          },
          {
            hash_id: "eccbc87e4b5ce2fe28308fd9f2a7baf3",
            amount: 0.025,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "eccbc87e4b5ce2fe28308fd9f2a7baf3",
            amount: 0.05,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "a87ff679a2f3e71d9181a67b7542122c",
    time: "2024-07-27T00:05:10Z",
    input_total: 0.2,
    output_total: 0.1,
    amount: 0.3,
    input_address: [
      {
        address: "1L1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 94,
        input_amount: 0.2,
      },
    ],
    output_address: [
      {
        address: "1M1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 89,
        output_amount: 0.1,
      },
    ],
    weight: 250,
    trusted: true,
    history: [
      {
        hash_id: "eccbc87e4b5ce2fe28308fd9f2a7baf3",
        totalAmount: 0.06,
        trusted: true,
        from: [
          {
            hash_id: "eccbc87e4b5ce2fe28308fd9f2a7baf3",
            amount: 0.03,
            trusted: true,
          },
          {
            hash_id: "a87ff679a2f3e71d9181a67b7542122c",
            amount: 0.03,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "a87ff679a2f3e71d9181a67b7542122c",
            amount: 0.06,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "e4da3b7fbbce2345d7772b0674a318d5",
    time: "2024-07-28T01:10:30Z",
    input_total: 0.14,
    output_total: 0.07,
    amount: 0.21,
    input_address: [
      {
        address: "1N1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 90,
        input_amount: 0.14,
      },
    ],
    output_address: [
      {
        address: "1O1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 85,
        output_amount: 0.07,
      },
    ],
    weight: 220,
    trusted: true,
    history: [
      {
        hash_id: "a87ff679a2f3e71d9181a67b7542122c",
        totalAmount: 0.03,
        trusted: true,
        from: [
          {
            hash_id: "a87ff679a2f3e71d9181a67b7542122c",
            amount: 0.015,
            trusted: true,
          },
          {
            hash_id: "e4da3b7fbbce2345d7772b0674a318d5",
            amount: 0.015,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "e4da3b7fbbce2345d7772b0674a318d5",
            amount: 0.03,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "1679091c5a880faf6fb5e6087eb1b2dc",
    time: "2024-07-29T02:20:40Z",
    input_total: 0.18,
    output_total: 0.09,
    amount: 0.27,
    input_address: [
      {
        address: "1P1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 92,
        input_amount: 0.18,
      },
    ],
    output_address: [
      {
        address: "1Q1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 87,
        output_amount: 0.09,
      },
    ],
    weight: 230,
    trusted: false,
    history: [
      {
        hash_id: "e4da3b7fbbce2345d7772b0674a318d5",
        totalAmount: 0.04,
        trusted: false,
        from: [
          {
            hash_id: "e4da3b7fbbce2345d7772b0674a318d5",
            amount: 0.02,
            trusted: false,
          },
          {
            hash_id: "1679091c5a880faf6fb5e6087eb1b2dc",
            amount: 0.02,
            trusted: false,
          },
        ],
        to: [
          {
            hash_id: "1679091c5a880faf6fb5e6087eb1b2dc",
            amount: 0.04,
            trusted: false,
          },
        ],
      },
    ],
  },
  {
    hash_id: "8f14e45fceea167a5a36dedd4bea2543",
    time: "2024-07-30T03:30:50Z",
    input_total: 0.16,
    output_total: 0.08,
    amount: 0.24,
    input_address: [
      {
        address: "1R1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 91,
        input_amount: 0.16,
      },
    ],
    output_address: [
      {
        address: "1S1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 86,
        output_amount: 0.08,
      },
    ],
    weight: 240,
    trusted: true,
    history: [
      {
        hash_id: "1679091c5a880faf6fb5e6087eb1b2dc",
        totalAmount: 0.05,
        trusted: true,
        from: [
          {
            hash_id: "1679091c5a880faf6fb5e6087eb1b2dc",
            amount: 0.025,
            trusted: true,
          },
          {
            hash_id: "8f14e45fceea167a5a36dedd4bea2543",
            amount: 0.025,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "8f14e45fceea167a5a36dedd4bea2543",
            amount: 0.05,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "c9f0f895fb98ab9159f51fd0297e236d",
    time: "2024-07-31T04:40:00Z",
    input_total: 0.24,
    output_total: 0.12,
    amount: 0.36,
    input_address: [
      {
        address: "1T1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 93,
        input_amount: 0.24,
      },
    ],
    output_address: [
      {
        address: "1U1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 88,
        output_amount: 0.12,
      },
    ],
    weight: 260,
    trusted: true,
    history: [
      {
        hash_id: "8f14e45fceea167a5a36dedd4bea2543",
        totalAmount: 0.06,
        trusted: true,
        from: [
          {
            hash_id: "8f14e45fceea167a5a36dedd4bea2543",
            amount: 0.03,
            trusted: true,
          },
          {
            hash_id: "c9f0f895fb98ab9159f51fd0297e236d",
            amount: 0.03,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "c9f0f895fb98ab9159f51fd0297e236d",
            amount: 0.06,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "45c48cce2e2d7fbdea1afc51c7c6ad26",
    time: "2024-08-01T06:50:10Z",
    input_total: 0.28,
    output_total: 0.14,
    amount: 0.42,
    input_address: [
      {
        address: "1V1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 94,
        input_amount: 0.28,
      },
    ],
    output_address: [
      {
        address: "1W1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 89,
        output_amount: 0.14,
      },
    ],
    weight: 270,
    trusted: true,
    history: [
      {
        hash_id: "c9f0f895fb98ab9159f51fd0297e236d",
        totalAmount: 0.07,
        trusted: true,
        from: [
          {
            hash_id: "c9f0f895fb98ab9159f51fd0297e236d",
            amount: 0.035,
            trusted: true,
          },
          {
            hash_id: "45c48cce2e2d7fbdea1afc51c7c6ad26",
            amount: 0.035,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "45c48cce2e2d7fbdea1afc51c7c6ad26",
            amount: 0.07,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "d3d9446802a44259755d38e6d163e820",
    time: "2024-08-02T07:00:20Z",
    input_total: 0.32,
    output_total: 0.16,
    amount: 0.48,
    input_address: [
      {
        address: "1X1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 94,
        input_amount: 0.32,
      },
    ],
    output_address: [
      {
        address: "1Y1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 89,
        output_amount: 0.16,
      },
    ],
    weight: 220,
    trusted: true,
    history: [
      {
        hash_id: "45c48cce2e2d7fbdea1afc51c7c6ad26",
        totalAmount: 0.08,
        trusted: true,
        from: [
          {
            hash_id: "45c48cce2e2d7fbdea1afc51c7c6ad26",
            amount: 0.04,
            trusted: true,
          },
          {
            hash_id: "d3d9446802a44259755d38e6d163e820",
            amount: 0.04,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "d3d9446802a44259755d38e6d163e820",
            amount: 0.08,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "6512bd43d9caa6e02c990b0a82652dca",
    time: "2024-08-03T08:10:40Z",
    input_total: 0.36,
    output_total: 0.18,
    amount: 0.54,
    input_address: [
      {
        address: "1Z1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 96,
        input_amount: 0.36,
      },
    ],
    output_address: [
      {
        address: "1a1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 91,
        output_amount: 0.18,
      },
    ],
    weight: 230,
    trusted: true,
    history: [
      {
        hash_id: "d3d9446802a44259755d38e6d163e820",
        totalAmount: 0.09,
        trusted: true,
        from: [
          {
            hash_id: "d3d9446802a44259755d38e6d163e820",
            amount: 0.045,
            trusted: true,
          },
          {
            hash_id: "6512bd43d9caa6e02c990b0a82652dca",
            amount: 0.045,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "6512bd43d9caa6e02c990b0a82652dca",
            amount: 0.09,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "c20ad4d76fe97759aa27a0c99bff6710",
    time: "2024-08-04T09:20:50Z",
    input_total: 0.4,
    output_total: 0.2,
    amount: 0.6,
    input_address: [
      {
        address: "1b1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 97,
        input_amount: 0.4,
      },
    ],
    output_address: [
      {
        address: "1c1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 92,
        output_amount: 0.2,
      },
    ],
    weight: 260,
    trusted: true,
    history: [
      {
        hash_id: "6512bd43d9caa6e02c990b0a82652dca",
        totalAmount: 0.1,
        trusted: true,
        from: [
          {
            hash_id: "6512bd43d9caa6e02c990b0a82652dca",
            amount: 0.05,
            trusted: true,
          },
          {
            hash_id: "c20ad4d76fe97759aa27a0c99bff6710",
            amount: 0.05,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "c20ad4d76fe97759aa27a0c99bff6710",
            amount: 0.1,
            trusted: true,
          },
        ],
      },
    ],
  },
  {
    hash_id: "c51ce410c124a10e0db5e4b97fc2af39",
    time: "2024-08-05T10:30:10Z",
    input_total: 0.5,
    output_total: 0.25,
    amount: 0.75,
    input_address: [
      {
        address: "1d1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 98,
        input_amount: 0.5,
      },
    ],
    output_address: [
      {
        address: "1e1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        trust_score: 93,
        output_amount: 0.25,
      },
    ],
    weight: 280,
    trusted: true,
    history: [
      {
        hash_id: "c20ad4d76fe97759aa27a0c99bff6710",
        totalAmount: 0.12,
        trusted: true,
        from: [
          {
            hash_id: "c20ad4d76fe97759aa27a0c99bff6710",
            amount: 0.06,
            trusted: true,
          },
          {
            hash_id: "c51ce410c124a10e0db5e4b97fc2af39",
            amount: 0.06,
            trusted: true,
          },
        ],
        to: [
          {
            hash_id: "c51ce410c124a10e0db5e4b97fc2af39",
            amount: 0.12,
            trusted: true,
          },
        ],
      },
    ],
  },
];

export { dummyData };
