import prisma from "../db";

// readAll
export const readUpdates = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: {
        include: {
          updates: true,
        },
      },
    },
  });

  const updates = [];
  user.products.forEach((product) => updates.push(...product.updates));
  res.json({ data: updates });
};

// readById
export const readUpdateById = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: update });
};

// update
export const updateUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = [];
  products.forEach((product) => updates.push(...product.updates));

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    res.json({ message: "invalid update" });
  }

  const update = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: update });
};

// create
export const createUpdate = async (req, res) => {
  const { productId, title, body } = req.body;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    // does not belong to user
    res.json({ message: "product does not belong to user" });
  }

  const updatedUpdate = await prisma.update.create({
    data: {
      title,
      body,
      product: { connect: { id: productId } },
    },
  });

  res.json({ data: updatedUpdate });
};

// delete
export const deleteUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = [];
  products.forEach((product) => updates.push(...product.updates));

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    res.json({ message: "invalid update" });
  }

  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
